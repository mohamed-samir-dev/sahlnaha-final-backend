const mongoose = require("mongoose");

const employeeContractSchema = new mongoose.Schema(
  {
    employeeName: { type: String, default: "", trim: true },
    nationalId: { type: String, default: "", trim: true },
    nationality: { type: String, default: "", trim: true },
    birthDate: { type: String, default: "" },
    contractDuration: { type: Number, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    contractDate: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("EmployeeContract", employeeContractSchema);
