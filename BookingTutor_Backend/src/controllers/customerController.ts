import { User } from "../models/userModel";
import { Request, Response } from "express";

const getCustomers = async (req: Request, res: Response) => {
  try {
    const customer = await User.find().select("-password");
    res.status(200).json({
      message: "Lấy danh sách khách hàng thành công",
      data: customer,
    });
  } catch (error) {
    res.status(500).json({
      message: "Lỗi sever",
    });
  }
};

const updateCustomer = async (req: Request, res: Response) => {
  try {
    const { customerId } = req.params;
    const { username, email } = req.body;
    const avatarFile = req.file;

    const updateData: any = { username, email };
    // Nếu có file avatar, thêm đường dẫn vào updateData
    if (avatarFile) {
      updateData.avatar = `/uploads/${avatarFile.filename}`;
    }

    const updatedCustomer = await User.findByIdAndUpdate(customerId, updateData, {
      new: true,
    });

    if (!updatedCustomer) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json({
      message: "User updated successfully",
      data: updatedCustomer,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating user",
      error,
    });
  }
};

export { getCustomers, updateCustomer };
