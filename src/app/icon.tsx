import { ImageResponse } from 'next/og'
import { Activity } from 'lucide-react'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#222738', // dark background from theme
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#BE70D5',
          borderRadius: '8px'
        }}
      >
        <Activity size={20} />
      </div>
    ),
    {
      ...size,
    }
  )
}
