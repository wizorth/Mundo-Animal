import SocialButton from "./SocialButton";
import { faFacebook, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

interface BusinessInfo {
  imgSrc: string;
  title: string;
  description: string;
  services: {name:string,sticker:string}[];
  schedule: string;
  facebook: string;
  whatsapp: string;
  tiktok: string;
  locations: { imgFrontis: string; address: string; mapSrc: string}[]; // Ahora soporta varias ubicaciones
}

const BusinessCard: React.FC<BusinessInfo> = ({ imgSrc, title, description, services, schedule, locations,facebook,whatsapp,tiktok }) => {
  return (
    <div className="w-full p-4 flex flex-wrap rounded-lg space-y-4 flex-col grow ">
      <h5 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 ">{title}</h5>
      <div className="flex flex-wrap">
        {/* Imagen */}
        <div className="max-w-md ">
          <img
            src={imgSrc}
            alt={title}
            className="object-cover rounded-t-lg lg:rounded-t-none lg:rounded-l-lg"
            
          />
        </div>

        {/* Contenido */}
        <div className="p-8 ">
          
          <p className="text-xl font-normal text-gray-900 dark:text-black mb-6">{description}</p>
          <div className="font-normal text-gray-900 dark:text-black mb-6">
            <strong className="text-3xl">Servicios:</strong>
            <ul className="space-y-3">
        {services.map((service, index) => (
          <li key={index} className="flex items-center gap-3">
          {service.sticker && (
            <img 
              src={service.sticker} 
              alt={`Sticker ${service.name}`}
              className="w-20 h-20 object-contain hover:scale-150 transition-transform"
            />
          )}
          <span className="font-medium text-xl">{service.name}</span>
        </li>
        ))}
      </ul>

          </div>
          
          </div>
        <div className="">
          <p className="font-normal text-gray-900 dark:text-black-400 mb-4">
            <strong className="text-3xl">Horario:</strong>
             <p className="whitespace-pre-line text-xl">{schedule}
             </p>
          </p>
          <p className="text-3xl font-bold tracking-tight text-gray-900 dark:text-black mb-4 ">Contactar</p>
          <div className="flex space-x-4 p-4">
      <SocialButton 
        href={facebook}
        icon={faFacebook} 
        bgColor="bg-blue-600" 
        textColor="text-white"

      />
      <SocialButton 
        href={tiktok} 
        icon={faTiktok} 
        bgColor="bg-black" 
        textColor="text-white"

      />
      <SocialButton 
        href={whatsapp} 
        icon={faWhatsapp} 
        bgColor="bg-green-500" 
        textColor="text-white" 
      />
    </div>
        </div>
        
        </div>  
          <div className="flex flex-wrap justify-center">
              {/* Múltiples ubicaciones */}
          {locations.map((location, index) => (
            <div key={index} className=" p-6 m-2 flex flex-wrap grow justify-center md:max-w-xl rounded-lg shadow-lg bg-[rgba(98,107,83,0.5)]">
              <p className="font-normal text-gray-900 dark:text-black text-2xl">
                <strong>
                  {index === 0 ? "Central" : `Sucursal ${index}`}:
                </strong>{" "}
                {location.address}
              </p>
              <iframe
                src={location.mapSrc}
                className=" md:h-72 rounded-lg mb-2"
                style={{
                  aspectRatio: "16 / 9", // Mantiene la proporción
                  pointerEvents: "auto"
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Mapa de ${title} - ${index === 0 ? "Central" : `Sucursal ${index}`}`}
                />

              <div className="items-center">
                <img
                  src={location.imgFrontis}
                  alt={title}
                  className=" object-cover rounded-t-lg lg:rounded-t-none lg:rounded-l-lg"
                  style={{ maxHeight: "550px" }} // Ajusta el alto máximo
                />
              </div>
            </div>
          ))}
          </div>
        
      
    </div>
  );
};

export default BusinessCard;
