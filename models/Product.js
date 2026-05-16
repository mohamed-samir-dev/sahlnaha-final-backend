const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    brief: { type: String },
    originalPrice: { type: Number, required: true },
    salePrice: { type: Number },
    description: { type: String },
    image: { type: String },
    images: [{ type: String }],
    color: { type: String },
    storage: { type: String },
    network: { type: String },
    screenSize: { type: String },
    specifications: [
      {
        groupName: String,
        items: [
          {
            label: String,
            value: String,
          },
        ],
      },
    ],
    overview: { type: String },
    overviewImage: { type: String },
    features: [{ type: String }],
    specs: {
      screen: String,
      processor: String,
      ram: String,
      storage: String,
      rearCamera: String,
      frontCamera: String,
      battery: String,
      batteryLife: String,
      charging: String,
      os: String,
      extras: String,
    },
    detailedSpecs: {
      body: {
        material: String,
        waterResistance: String,
        weight: String,
      },
      display: {
        resolution: String,
        brightness: String,
        protection: String,
      },
      camera: {
        main: String,
        ultraWide: String,
        telephoto: String,
        video: String,
      },
      connectivity: {
        wifi: String,
        bluetooth: String,
        usb: String,
      },
    },
    rating: {
      average: { type: Number, default: 0 },
      count: { type: Number, default: 0 },
    },
    reviews: [
      {
        name: String,
        rate: Number,
        comment: String,
        date: String,
      },
    ],
    colors: [
      {
        name: String,
        code: String,
      },
    ],
    freeDelivery: { type: Boolean, default: true },
    deliveryTime: { type: String, default: "24 ساعة" },
    warrantyYears: { type: Number, default: 2 },
    installment: {
      available: { type: Boolean, default: false },
      downPayment: Number,
      note: String,
      months: Number,
      conditions: [String],
      policy: String,
    },
    taxIncluded: { type: Boolean, default: true },
    category: { type: String },
    subCategory: { type: String },
    brand: { type: String },
    inStock: { type: Boolean, default: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

productSchema.virtual("discountPercent").get(function () {
  if (this.salePrice != null && this.salePrice !== this.originalPrice) {
    return Math.round(((this.originalPrice - this.salePrice) / this.originalPrice) * 100);
  }
  return 0;
});

productSchema.virtual("price").get(function () {
  return this.salePrice || this.originalPrice;
});

module.exports = mongoose.model("Product", productSchema);
