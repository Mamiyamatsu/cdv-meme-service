import adsArray from "../AdsData/adsArray"
import "../Styles/Aside.css"

export function AdsComponent() {
    return (
      <div className="ads-container">
        {adsArray.map((ad) => (
          <div key={ad.id} className="ad">
            <a 
              href={ad.link} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src={ad.img} alt={`Reklama ${ad.id}`} />
            </a>
          </div>
        ))}
      </div>
    );
  }