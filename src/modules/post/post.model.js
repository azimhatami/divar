const { Schema, Types } = require('mongoose');


const PostSchema = new Schema({
  category: {type: Types.ObjectId, ref: 'category', required: true},
  province: {type: String, required: true},
  city: {type: String, required: true},
  district: {type: String, required: true},
  coordinate: {type: [Number], required: true}, // 32.25425435, 32.24523434266
  images: {type: [String], required: false, default: []}
});
