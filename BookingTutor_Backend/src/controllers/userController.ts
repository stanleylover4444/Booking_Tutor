import { User } from "../models/userModel";
import { Request, Response } from "express";

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json({
      message: "Lấy danh sách người dùng thành công",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Lỗi sever",
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { username, email } = req.body;
    const avatarFile = req.file;

    const updateData: any = { username, email };
    // Nếu có file avatar, thêm đường dẫn vào updateData
    if (avatarFile) {
      updateData.avatar = `/uploads/${avatarFile.filename}`;
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
    });

    if (!updatedUser) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json({
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating user",
      error,
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const deleteUser = await User.findByIdAndDelete(userId);

    if (!deleteUser) {
      res.status(404).json({ message: "Không tìm thấy người dùngdùng" });
      return;
    }

    res.status(200).json({
      message: "Xóa người dùng thành côngcông",
    });
  } catch (error) {
    res.status(500).json({
      message: "Lỗi xóa người dùng",
      error,
    });
  }
};

export { getUsers, updateUser, deleteUser };
