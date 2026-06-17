const mongoose = require("mongoose");

const employeeContractSchema = new mongoose.Schema(
  {
    employeeName: { type: String, required: true, trim: true },
    nationalId: { type: String, required: true, trim: true },
    nationality: { type: String, default: "", trim: true },
    birthDate: { type: String, required: true },
    contractDuration: { type: Number, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    contractDate: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("EmployeeContract", employeeContractSchema);
