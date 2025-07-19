interface CountryFlagProps {
  country: string;
  className?: string;
}

export function CountryFlag({ country, className = "w-8 h-8" }: CountryFlagProps) {
  const getFlagSvg = (countryName: string) => {
    const name = countryName.toLowerCase();
    
    switch (name) {
      case 'burundi':
        return (
          <svg viewBox="0 0 24 24" className={className}>
            <defs>
              <clipPath id="burundi-clip">
                <circle cx="12" cy="12" r="10"/>
              </clipPath>
            </defs>
            <g clipPath="url(#burundi-clip)">
              <rect width="24" height="8" fill="#18B249"/>
              <rect y="8" width="24" height="8" fill="#CF0921"/>
              <rect y="16" width="24" height="8" fill="#18B249"/>
              <polygon points="0,0 12,12 0,24" fill="#FFFFFF"/>
              <polygon points="24,0 12,12 24,24" fill="#FFFFFF"/>
              <circle cx="12" cy="12" r="3" fill="#FFFFFF"/>
              <circle cx="12" cy="10" r="0.8" fill="#CF0921"/>
              <circle cx="10.5" cy="13.5" r="0.8" fill="#CF0921"/>
              <circle cx="13.5" cy="13.5" r="0.8" fill="#CF0921"/>
            </g>
          </svg>
        );
      
      case 'zambia':
        return (
          <svg viewBox="0 0 24 24" className={className}>
            <defs>
              <clipPath id="zambia-clip">
                <circle cx="12" cy="12" r="10"/>
              </clipPath>
            </defs>
            <g clipPath="url(#zambia-clip)">
              <rect width="24" height="24" fill="#198A00"/>
              <rect y="16" width="24" height="8" fill="#DE2010"/>
              <rect y="12" width="24" height="4" fill="#000000"/>
              <rect y="8" width="24" height="4" fill="#EF7D00"/>
              <rect width="8" height="12" fill="#0072C6"/>
              <polygon points="16,2 20,6 16,6" fill="#EF7D00"/>
            </g>
          </svg>
        );
      
      case 'mozambique':
        return (
          <svg viewBox="0 0 24 24" className={className}>
            <defs>
              <clipPath id="mozambique-clip">
                <circle cx="12" cy="12" r="10"/>
              </clipPath>
            </defs>
            <g clipPath="url(#mozambique-clip)">
              <rect width="24" height="8" fill="#009639"/>
              <rect y="8" width="24" height="8" fill="#000000"/>
              <rect y="16" width="24" height="8" fill="#FFCA00"/>
              <rect y="6" width="24" height="2" fill="#FFFFFF"/>
              <rect y="16" width="24" height="2" fill="#FFFFFF"/>
              <polygon points="0,0 0,24 12,12" fill="#DC143C"/>
              <polygon points="3,9 7,11 3,13 4,9" fill="#FFCA00"/>
            </g>
          </svg>
        );
      
      default:
        // Generic flag design
        return (
          <svg viewBox="0 0 24 24" className={className}>
            <defs>
              <clipPath id="generic-clip">
                <circle cx="12" cy="12" r="10"/>
              </clipPath>
            </defs>
            <g clipPath="url(#generic-clip)">
              <rect width="24" height="8" fill="#4F46E5"/>
              <rect y="8" width="24" height="8" fill="#FFFFFF"/>
              <rect y="16" width="24" height="8" fill="#DC2626"/>
            </g>
          </svg>
        );
    }
  };

  return getFlagSvg(country);
}