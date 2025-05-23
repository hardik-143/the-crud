import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  apiKey: {
    type: String,
    required: true,
    unique: true,
    default: () => crypto.randomUUID(),
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare password
userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    console.log("Comparing passwords:");
    console.log("Stored hash:", this.password);
    console.log("Candidate password:", candidatePassword);
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    console.log("Password match result:", isMatch);
    return isMatch;
  } catch (error) {
    console.error("Error comparing passwords:", error);
    return false;
  }
};

userSchema.statics.generateNewApiKey = async function (userId) {
  const newApiKey = crypto.randomUUID();
  await this.findByIdAndUpdate(userId, { apiKey: newApiKey });
  return newApiKey;
};

const User = mongoose.model("users", userSchema);

export default User;
