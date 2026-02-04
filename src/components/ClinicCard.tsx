import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { montserratBold, montserratSemiSemiBold } from "@/app/fonts"

interface LocationCardProps {
  area: string
  address: string
  address2: string
  locationUrl: string
}

export function LocationCard({ area, address, address2, locationUrl }: LocationCardProps) {
  return (
    <Card className="py-8 px-8 bg-white">
        <h2 className={`text-[#139FDA] text-2xl font-semibold mb-6 ${montserratBold.className}`}>{area}</h2>
        <p className={`text-gray-600 text-lg leading-relaxed ${montserratSemiSemiBold.className}`}>{address}</p>
        <p className={`text-gray-600 text-lg mb-8 leading-relaxed ${montserratSemiSemiBold.className}`}>{address2}</p>
        <Link
            href={locationUrl}
            target="_blank"
            className={`text-white bg-[#2F438F] font-medium px-6 py-3 rounded-xl ${montserratSemiSemiBold.className}`}
        >
            Map Location
        </Link>
    </Card>
  )
}