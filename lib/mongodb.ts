import mongoose from 'mongoose'

declare global {
  // eslint-disable-next-line no-var
  var _mongooseConn: typeof mongoose | null
}

export async function connectDB() {
  if (global._mongooseConn) return global._mongooseConn
  const uri = process.env.MONGODB_URI
  if (!uri) throw new Error('MONGODB_URI is not defined')
  global._mongooseConn = await mongoose.connect(uri)
  return global._mongooseConn
}
