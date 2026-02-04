import { montserratBold } from "@/app/fonts"
import { LocationCard } from "@/components/ClinicCard"

const clinics = [
  {
    id: 3,
    area: "North Delhi",
    address: "Nivaan Clinic, Santom Hospital,CS/ OCF - 4, Pocket 10",
    address2: "Sector-24, Rohini, New Delhi - 10085",
    locationUrl: "https://maps.app.goo.gl/r7GF8BUz2dQBtKCx6"
  },
  {
    id: 1,
    area: "East Delhi",
    address: "Nivaan Clinic, Kukreja Hospital, D-36,Block C, Acharya Niketan, Mayur Vihar",
    address2: "New Delhi - 110091",
    locationUrl: "https://maps.app.goo.gl/C2sKfUzd5e66XBop9"
  },
  {
    id: 11,
    area: "Central Delhi",
    address: "Nivaan Pain Clinic, MGS-Massh, 26 27, Shivaji Park, Block C, West Punjabi Bagh, Punjabi Bagh",
    address2: "New Delhi, Delhi 110026",
    locationUrl: "https://maps.app.goo.gl/ZTGH1KXAKxEFdzF29"
  },
  {
    id: 6,
    area: "Central Delhi",
    address: "Nivaan Clinic, Jeewanmaala Hospital, 67/1 New Rohtak Road, Guru Gobind Singh Marg, Karol Bagh,",
    address2: "New Delhi, Delhi 110005",
    locationUrl: "https://maps.app.goo.gl/yUandBYgEkTL5d3Y8"
  },
  {
    id: 6,
    area: "South West Delhi",
    address: "Nivaan Clinic, Bhagat Chandra Hospital, Airport Flyover, Mahavir, ",
    address2: "Enclave Part 2, Palam, New Delhi - 110045",
    locationUrl: "https://maps.app.goo.gl/MxtLh7BatsXRYBgC7"
  },
  {
    id: 6,
    area: "Nehru Place, South Delhi",
    address: "Nivaan Clinic, Apollo Spectra, Plot no. A, 2, Outer Ring Rd, near Nehru Place Flyover, Greater Kailash-1,",
    address2: "Chirag Enclave, Delhi 110048",
    locationUrl: "https://maps.app.goo.gl/gNYF68MxRDyL6Nqv8"
  },
  {
    id: 12,
    area: "South Delhi",
    address: "Nivaan Pain Clinic, MASSH, GK, B-18, Nehru Place Flyover, Chirag Enclave, Nehru Place",
    address2: "New Delhi, Delhi 110048",
    locationUrl: "https://maps.app.goo.gl/PM26pxdX783P34ZD9"
  },
  {
    id: 13,
    area: "South Delhi",
    address: "Nivaan Pain Clinic, F-23, Nivaan, opposite Sri Aurobindo College, Geetanjali Enclave, Malviya Nagar",
    address2: "New Delhi, Delhi 110017",
    locationUrl: "https://maps.app.goo.gl/QBi89JVdcsryffvCA"
  },
  {
    id: 5,
    area: "Safdarjung Enclave",
    address: "Nivaan Clinic, Aashlok Hopsital, 25 A, Block A 1, Block AB, Safdarjung Enclave, New Delhi,",
    address2: "Delhi - 110029",
    locationUrl: "https://maps.app.goo.gl/fBxgFBDu4rz9DVW48"
  },
  {
    id: 8,
    area: "Noida",
    address: "Nivaan Clinic, Noida Multispeciality Clinic, Sector 66 Noida,",
    address2: "Uttar Pradesh - 201307",
    locationUrl: "https://maps.app.goo.gl/fKyuw9KuDL3DvL1T6"
  },
  {
    id: 14,
    area: "Noida",
    address: "Nivaan Pain Clinic, Massh Manas, A93, Main Rd Gijhor, Block A, Sector 34,",
    address2: "Noida, Uttar Pradesh 201307",
    locationUrl: "https://maps.app.goo.gl/ReFiua5hPShTdfSE6"
  },
  {
    id: 8,
    area: "Ghaziabad",
    address: "Nivaan Clinic, Atlanta Hospital, Plot No. NH 01, Bhagwan Parshuram Chowk, Sector 14,",
    address2: "Vasundhara, Ghaziabad, UP - 201010",
    locationUrl: "https://maps.app.goo.gl/PNRJnyXVZeeR5fYD9"
  },
  {
    id: 7,
    area: "Gurugram",
    address: "Nivaan Clinic, Umkal hospital, A-520 Sushant Lok-1,  Near IFFCO Metro Station",
    address2: "Gurugram, Haryana 122002",
    locationUrl: "https://maps.app.goo.gl/5cUnVCDUWGjfDPQk9"
  },
  {
    id: 6,
    area: "Faridabad",
    address: "Nivaan Clinic, Santosh Hospital, Plot No. 3F/139, New Industrial Township 2b, Block F ",
    address2: "Faridabad, Haryana 121001",
    locationUrl: "https://maps.app.goo.gl/Z6V2boxJBmwQBugR8"
  }
];

const clinicsMumbais = [
  {
    id: 10,
    area: "Mumbai",
    address: "Nivaan Clinic, Lilavati Hospital, A-791, Bandra Reclamation Rd, General Arunkumar Vaidya Nagar, Bandra West,",
    address2: "Mumbai, Maharashtra 400050",
    locationUrl: "https://maps.app.goo.gl/M65Yiw3gzRDDdNcv9"
  },
  {
    id: 10,
    area: "Central Mumbai",
    address: "Nivaan Clinic, Wockhardt Hospital Police Station, 1877, Dr Anandrao Nair Marg, near Agripada, Mumbai Central,",
    address2: "Mumbai, Maharashtra 400011",
    locationUrl: "https://maps.app.goo.gl/6Z97my7mf92dHEs26"
  },
  {
    id: 10,
    area: "Navi Mumbai",
    address: "Nivaan Clinic, Terna Hospital, Phase II, Plot no 12, Sector 22, opp. Nerul Railway Station, Nerul West,",
    address2: "Navi Mumbai, Maharashtra 400706",
    locationUrl: "https://maps.app.goo.gl/gfEVBkrAnpZDPhun8"
  },
  {
    id: 10,
    area: "Chembur, Mumbai",
    address: "Nivaan Clinic, SRV Hospitals, opposite Lokmanya Tilak Terminus, Shell Colony, Tilak Nagar, Chembur, Mumbai,",
    address2: "Maharashtra 400089",
    locationUrl: "https://maps.app.goo.gl/5rZMHvcJgKNNhonh8"
  },
  {
    id: 10,
    area: "Chembur, Mumbai",
    address: "Nivaan Clinic, Painacea Spine Wellness, First Floor, Shrikant Chambers - c, 125, B Wing, next to RK Studios,",
    address2: "Chembur - 400071",
    locationUrl: "https://maps.app.goo.gl/Y2ac6F9kzpLstwFy7"
  }
];
const clinicsJaipurs = [
  {
    id:9,
    area:"Jaipur",
    address:"Nivaan Clinic, Apollo Spectra, Plot No. 5, Sahakar Marg, near Rajasthan Vidhan Sabha, Vidhayak Nagar,",
    address2:"Lalkothi, Raj - 302007",
    locationUrl:"https://maps.app.goo.gl/nBtWto76iWyJKdG96"
  },
  {
    id:15,
    area:"Jaipur",
    address:"Nivaan Pain Clinic Mangalam Plus Medicity Hospital, Shipra Path, Mansarovar Sector 5, Mansarovar,",
    address2:"Jaipur, Rajasthan 302020",
    locationUrl:"https://maps.app.goo.gl/j2AMUyCsjMKs9fQC7"
  },
];


const clinicsLkos = [
  {
    id: 1,
    area: "Lucknow",
    address: "Nivaan Clinic, Nova Hospital, Patrkarpuram crossing Rd, Vikas Khand 1, Gomti Nagar, Lucknow,",
    address2: "Uttar Pradesh 226010",
    locationUrl: "https://maps.app.goo.gl/AqwYiJ8DEcCAodck8"
  }
];

export default function ClinicLocations() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className={`text-4xl font-bold mb-8 text-center text-[#2F438F] ${montserratBold.className}`}>Clinic Locations</h1>
        <h2 className={`text-2xl  mb-3 text-[#2F438F] ${montserratBold.className}`}>Delhi NCR</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinics.map((clinic) => (
            <LocationCard
                key={clinic.id}
                area={clinic.area}
                address={clinic.address}
                address2={clinic.address2}
                locationUrl={clinic.locationUrl}
            />
          ))}
        </div>
        <h2 className={`text-2xl mt-5 mb-3 text-[#2F438F] ${montserratBold.className}`}>Lucknow</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicsLkos.map((clinicsLko) => (
            <LocationCard
                key={clinicsLko.id}
                area={clinicsLko.area}
                address={clinicsLko.address}
                address2={clinicsLko.address2}
                locationUrl={clinicsLko.locationUrl}
            />
          ))}
        </div>

        <h2 className={`text-2xl mt-5 mb-3 text-[#2F438F] ${montserratBold.className}`}>Jaipur</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicsJaipurs.map((clinicsJaipur) => (
            <LocationCard
                key={clinicsJaipur.id}
                area={clinicsJaipur.area}
                address={clinicsJaipur.address}
                address2={clinicsJaipur.address2}
                locationUrl={clinicsJaipur.locationUrl}
            />
          ))}
        </div>
        {/* clinicsMumbais */}
        <h2 className={`text-2xl mt-5 mb-3 text-[#2F438F] ${montserratBold.className}`}>Mumbai</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicsMumbais.map((clinicsMumbai) => (
            <LocationCard
                key={clinicsMumbai.id}
                area={clinicsMumbai.area}
                address={clinicsMumbai.address}
                address2={clinicsMumbai.address2}
                locationUrl={clinicsMumbai.locationUrl}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
