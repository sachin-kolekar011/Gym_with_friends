// import React from "react";
// import "../styles/GymLocator.css";

// const gyms = [
//   {
//     name: "VISHWA GYM",
//     address: "Next to Bank of India, Clover Park, Viman Nagar, Pune",
//     phone: "+91 98813 44635",
//     mapQuery: "the Gym, Clover Park, Viman Nagar, Pune",
//   },
//   {
//     name: "VISHWA GYM",
//     address: "4th Floor, 10 Biz Park, Viman Nagar, Pune",
//     phone: "9022385408",
//     mapQuery: "Anytime Fitness, 10 Biz Park, Viman Nagar, Pune",
//   },
//   {
//     name: "VISHWA GYM",
//     address: "Elite Suites Hotel, Datta Mandir Chowk, Viman Nagar, Pune",
//     phone: "8888999917 / 9823914542",
//     mapQuery: "Get Fit Gym, Datta Mandir Chowk, Viman Nagar, Pune",
//   },
//   {
//     name: "VISHWA GYM",
//     address: "Gera Emporia, Behind Phoenix Market City, Viman Nagar",
//     phone: null,
//     link: "https://multifit.in/center/multifit-kalyani-nagar",
//     mapQuery: "MultiFit, Viman Nagar, Pune",
//   },
//   {
//     name: "VISHWA GYM",
//     address: "Giga Space IT Park, Nagar Road, Viman Nagar, Pune",
//     phone: null,
//     mapQuery: "Gold's Gym, Giga Space, Viman Nagar, Pune",
//   },
// ];

// const GymLocator = () => {
//   return (
//     <div className="gym-locator-container">
//       <h1 className="gym-locator-title">Gyms in Viman Nagar, Pune</h1>
//       <div className="gym-locator-list">
//         {gyms.map((gym, index) => (
//           <div key={index} className="gym-locator-card">
//             <h2 className="gym-locator-name">
//               {gym.link ? (
//                 <a href={gym.link} target="_blank" rel="noopener noreferrer">
//                   {gym.name}
//                 </a>
//               ) : (
//                 gym.name
//               )}
//             </h2>
//             <p className="gym-locator-address">{gym.address}</p>
//             {gym.phone && <p className="gym-locator-phone">📞 {gym.phone}</p>}
//             <iframe
//               src={`https://www.google.com/maps?q=${encodeURIComponent(
//                 gym.mapQuery
//               )}&output=embed`}
//               title={gym.name}
//               loading="lazy"
//               className="gym-locator-map"
//             ></iframe>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GymLocator;


// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { FaPhone, FaMapMarkerAlt, FaSearch, FaDirections } from 'react-icons/fa';
// import { MdFitnessCenter } from 'react-icons/md';

// // Sample gym data for multiple cities (all branches of VISHWA GYM)
// const gymsData = [
//   {
//     id: 1,
//     name: "VISHWA GYM",
//     city: "Pune",
//     address: "Next to Bank of India, Clover Park, Viman Nagar, Pune",
//     phone: "+91 98813 44635",
//     mapQuery: "the Gym, Clover Park, Viman Nagar, Pune",
//     coordinates: { lat: 18.5678, lng: 73.9123 },
//     rating: 4.5,
//     membershipPlans: ['Monthly', 'Quarterly', 'Annual','Daily Pass'],
//     timings: '5:30 AM - 10:30 PM'
//   },
//   {
//     id: 2,
//     name: "VISHWA GYM",
//     city: "Pune",
//     address: "4th Floor, 10 Biz Park, Viman Nagar, Pune",
//     phone: "9022385408",
//     mapQuery: "Anytime Fitness, 10 Biz Park, Viman Nagar, Pune",
//     coordinates: { lat: 18.5689, lng: 73.9145 },
//     rating: 4.2,
//     membershipPlans: ['Monthly', 'Quarterly', 'Annual','Daily Pass'],
//     timings: 'Open 24/7'
//   },
//   {
//     id: 3,
//     name: "VISHWA GYM",
//     city: "Mumbai",
//     address: "Bandra West, Mumbai",
//     phone: "+91 98765 43210",
//     mapQuery: "Gold's Gym, Bandra West, Mumbai",
//     coordinates: { lat: 19.0760, lng: 72.8777 },
//     rating: 4.7,
//     membershipPlans: ['Monthly', 'Quarterly', 'Annual', 'Day Pass'],
//     timings: '6:00 AM - 11:00 PM'
//   },
//   {
//     id: 4,
//     name: "VISHWA GYM",
//     city: "Bangalore",
//     address: "Koramangala, Bangalore",
//     phone: "+91 87654 32109",
//     mapQuery: "Fitness First, Koramangala, Bangalore",
//     coordinates: { lat: 12.9352, lng: 77.6245 },
//     rating: 4.3,
//     membershipPlans: ['Monthly', 'Quarterly', 'Annual','Daily Pass'],
//     timings: '6:00 AM - 10:00 PM'
//   }
// ];

// // Get unique cities from gym data
// const cities = [...new Set(gymsData.map(gym => gym.city))];

// // Styled Components
// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 2rem;
//   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
// `;

// const Header = styled.header`
//   text-align: center;
//   margin-bottom: 2rem;
// `;

// const Title = styled.h1`
//   font-size: 2.5rem;
//   color: #2c3e50;
//   margin-bottom: 0.5rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.5rem;
// `;

// const Subtitle = styled.p`
//   color: #7f8c8d;
//   font-size: 1.1rem;
// `;

// const SearchContainer = styled.div`
//   display: flex;
//   gap: 1rem;
//   margin-bottom: 2rem;
//   flex-wrap: wrap;
//   justify-content: center;
// `;

// const SelectInput = styled.select`
//   padding: 0.8rem 1rem;
//   border: 2px solid #dfe6e9;
//   border-radius: 8px;
//   font-size: 1rem;
//   background-color: white;
//   cursor: pointer;
//   min-width: 250px;
// `;

// const Button = styled.button`
//   padding: 0.8rem 1.5rem;
//   background-color: #3498db;
//   color: white;
//   border: none;
//   border-radius: 8px;
//   font-size: 1rem;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   transition: all 0.3s ease;

//   &:hover {
//     background-color: #2980b9;
//   }
// `;

// const GymList = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
//   gap: 2rem;
// `;

// const GymCard = styled.div`
//   border: 1px solid #dfe6e9;
//   border-radius: 10px;
//   overflow: hidden;
//   transition: all 0.3s ease;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
//   }
// `;

// const GymImage = styled.div`
//   height: 200px;
//   background-color: #bdc3c7;
//   position: relative;
//   background-image: url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');
//   background-size: cover;
//   background-position: center;
// `;

// const GymContent = styled.div`
//   padding: 1.5rem;
// `;

// const GymName = styled.h2`
//   font-size: 1.5rem;
//   color: #2c3e50;
//   margin-bottom: 0.5rem;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// const GymAddress = styled.p`
//   color: #7f8c8d;
//   margin-bottom: 1rem;
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
// `;

// const GymPhone = styled.p`
//   color: #3498db;
//   margin-bottom: 1rem;
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
// `;

// const Rating = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.3rem;
//   color: #f39c12;
//   margin-bottom: 1rem;
// `;

// const MapContainer = styled.div`
//   height: 200px;
//   margin-top: 1rem;
//   border-radius: 8px;
//   overflow: hidden;
// `;

// const GymFooter = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-top: 1rem;
//   padding-top: 1rem;
//   border-top: 1px solid #ecf0f1;
// `;

// const MembershipPlans = styled.div`
//   display: flex;
//   gap: 0.5rem;
//   flex-wrap: wrap;
// `;

// const PlanTag = styled.span`
//   background-color: #2ecc71;
//   color: white;
//   padding: 0.3rem 0.6rem;
//   border-radius: 4px;
//   font-size: 0.8rem;
// `;

// const NoResults = styled.div`
//   text-align: center;
//   padding: 2rem;
//   grid-column: 1 / -1;
//   color: #7f8c8d;
// `;

// const GymLocator = () => {
//   const [selectedCity, setSelectedCity] = useState('All');
//   const [filteredGyms, setFilteredGyms] = useState(gymsData);

//   // Filter gyms based on selected city
//   useEffect(() => {
//     if (selectedCity === 'All') {
//       setFilteredGyms(gymsData);
//     } else {
//       const results = gymsData.filter(gym => gym.city === selectedCity);
//       setFilteredGyms(results);
//     }
//   }, [selectedCity]);

//   return (
//     <Container>
//       <Header>
//         <Title>
//           <MdFitnessCenter /> VISHWA GYM Locator
//         </Title>
//         <Subtitle>Find our branches across different cities</Subtitle>
//       </Header>

//       <SearchContainer>
//         <SelectInput
//           value={selectedCity}
//           onChange={(e) => setSelectedCity(e.target.value)}
//         >
//           <option value="All">All Cities</option>
//           {cities.map(city => (
//             <option key={city} value={city}>{city}</option>
//           ))}
//         </SelectInput>
//       </SearchContainer>

//       {filteredGyms.length > 0 ? (
//         <GymList>
//           {filteredGyms.map((gym) => (
//             <GymCard key={gym.id}>
//               <GymImage />
//               <GymContent>
//                 <GymName>
//                   {gym.name} - {gym.city}
//                   <Rating>
//                     ★ {gym.rating}
//                   </Rating>
//                 </GymName>
//                 <GymAddress>
//                   <FaMapMarkerAlt /> {gym.address}
//                 </GymAddress>
//                 {gym.phone && (
//                   <GymPhone>
//                     <FaPhone /> {gym.phone}
//                   </GymPhone>
//                 )}
//                 <p><strong>Timings:</strong> {gym.timings}</p>
                
//                 <MapContainer>
//                   <iframe
//                     src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(gym.mapQuery)}&zoom=15`}
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     allowFullScreen=""
//                     loading="lazy"
//                     title={`Map for ${gym.name}`}
//                   ></iframe>
//                 </MapContainer>
                
//                 <GymFooter>
//                   <MembershipPlans>
//                     {gym.membershipPlans.map(plan => (
//                       <PlanTag key={plan}>{plan}</PlanTag>
//                     ))}
//                   </MembershipPlans>
//                   <Button 
//                     as="a" 
//                     href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(gym.mapQuery)}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
//                   >
//                     <FaDirections /> Directions
//                   </Button>
//                 </GymFooter>
//               </GymContent>
//             </GymCard>
//           ))}
//         </GymList>
//       ) : (
//         <NoResults>
//           <h2>No gyms found in {selectedCity}</h2>
//           <p>We might be coming to your city soon!</p>
//         </NoResults>
//       )}
//     </Container>
//   );
// };

// export default GymLocator;




import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaPhone, FaMapMarkerAlt, FaDirections } from 'react-icons/fa';
import { MdFitnessCenter } from 'react-icons/md';

// Sample gym data
const gymsData = [
  {
    id: 1,
    name: "VISHWA GYM",
    city: "Pune",
    address: "Next to Bank of India, Clover Park, Viman Nagar, Pune",
    phone: "+91 98813 44635",
    coordinates: { lat: 18.5678, lng: 73.9123 },
    rating: 4.5,
    membershipPlans: ['Monthly', 'Quarterly', 'Annual', 'Day Pass'],
    timings: '5:30 AM - 10:30 PM'
  },
  {
    id: 2,
    name: "VISHWA GYM",
    city: "Pune",
    address: "4th Floor, 10 Biz Park, Viman Nagar, Pune",
    phone: "+91 9022385408",
    coordinates: { lat: 18.5689, lng: 73.9145 },
    rating: 4.2,
    membershipPlans: ['Monthly', 'Quarterly', 'Annual', 'Day Pass'],
    timings: 'Open 24/7'
  },
  {
    id: 3,
    name: "VISHWA GYM",
    city: "Mumbai",
    address: "Bandra West, Mumbai",
    phone: "+91 98765 43210",
    coordinates: { lat: 19.0760, lng: 72.8777 },
    rating: 4.7,
    membershipPlans: ['Monthly', 'Quarterly', 'Annual', 'Day Pass'],
    timings: '6:00 AM - 11:00 PM'
  },
  {
    id: 4,
    name: "VISHWA GYM",
    city: "Bangalore",
    address: "Koramangala, Bangalore",
    phone: "+91 87654 32109",
    coordinates: { lat: 12.9352, lng: 77.6245 },
    rating: 4.3,
    membershipPlans: ['Monthly', 'Quarterly', 'Annual', 'Day Pass'],
    timings: '6:00 AM - 10:00 PM'
  }
];

// Get unique cities
const cities = [...new Set(gymsData.map(gym => gym.city))];

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Subtitle = styled.p`
  color: #7f8c8d;
  font-size: 1.1rem;
`;

const SearchContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const SelectInput = styled.select`
  padding: 0.8rem 1rem;
  border: 2px solid #dfe6e9;
  border-radius: 8px;
  font-size: 1rem;
  background-color: white;
  cursor: pointer;
  min-width: 250px;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const GymList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`;

const GymCard = styled.div`
  border: 1px solid #dfe6e9;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const GymImage = styled.div`
  height: 200px;
  background-color: #bdc3c7;
  position: relative;
  background-image: url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');
  background-size: cover;
  background-position: center;
`;

const GymContent = styled.div`
  padding: 1.5rem;
`;

const GymName = styled.h2`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const GymAddress = styled.p`
  color: #7f8c8d;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const GymPhone = styled.p`
  color: #3498db;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #f39c12;
  margin-bottom: 1rem;
`;

const MapContainer = styled.div`
  height: 200px;
  margin-top: 1rem;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;

const MapFallback = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  color: #666;
  text-align: center;
  padding: 1rem;
`;

const GymFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #ecf0f1;
`;

const MembershipPlans = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const PlanTag = styled.span`
  background-color: #2ecc71;
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const NoResults = styled.div`
  text-align: center;
  padding: 2rem;
  grid-column: 1 / -1;
  color: #7f8c8d;
`;

const GymLocator = () => {
  const [selectedCity, setSelectedCity] = useState('All');
  const [filteredGyms, setFilteredGyms] = useState(gymsData);
  const [mapErrors, setMapErrors] = useState({});

  // Filter gyms based on selected city
  useEffect(() => {
    if (selectedCity === 'All') {
      setFilteredGyms(gymsData);
    } else {
      const results = gymsData.filter(gym => gym.city === selectedCity);
      setFilteredGyms(results);
    }
  }, [selectedCity]);

  // Handle map loading errors
  const handleMapError = (gymId) => {
    setMapErrors(prev => ({ ...prev, [gymId]: true }));
  };

  return (
    <Container>
      <Header>
        <Title>
          <MdFitnessCenter /> VISHWA GYM Locator
        </Title>
        <Subtitle>Find our branches across different cities</Subtitle>
      </Header>

      <SearchContainer>
        <SelectInput
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="All">All Cities</option>
          {cities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </SelectInput>
      </SearchContainer>

      {filteredGyms.length > 0 ? (
        <GymList>
          {filteredGyms.map((gym) => (
            <GymCard key={gym.id}>
              <GymImage />
              <GymContent>
                <GymName>
                  {gym.name} - {gym.city}
                  <Rating>
                    ★ {gym.rating}
                  </Rating>
                </GymName>
                <GymAddress>
                  <FaMapMarkerAlt /> {gym.address}
                </GymAddress>
                {gym.phone && (
                  <GymPhone>
                    <FaPhone /> {gym.phone}
                  </GymPhone>
                )}
                <p><strong>Timings:</strong> {gym.timings}</p>
                
                <MapContainer>
                  {mapErrors[gym.id] ? (
                    <MapFallback>
                      <div>
                        <p>Map could not be loaded</p>
                        <Button 
                          as="a" 
                          href={`https://www.openstreetmap.org/?mlat=${gym.coordinates.lat}&mlon=${gym.coordinates.lng}#map=15/${gym.coordinates.lat}/${gym.coordinates.lng}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', marginTop: '0.5rem' }}
                        >
                          View on OpenStreetMap
                        </Button>
                      </div>
                    </MapFallback>
                  ) : (
                    <iframe
                      src={`https://maps.google.com/maps?q=${gym.coordinates.lat},${gym.coordinates.lng}&z=15&output=embed`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      title={`Map for ${gym.name}`}
                      onError={() => handleMapError(gym.id)}
                    ></iframe>
                  )}
                </MapContainer>
                
                <GymFooter>
                  <MembershipPlans>
                    {gym.membershipPlans.map(plan => (
                      <PlanTag key={plan}>{plan}</PlanTag>
                    ))}
                  </MembershipPlans>
                  <Button 
                    as="a" 
                    href={`https://www.google.com/maps/dir/?api=1&destination=${gym.coordinates.lat},${gym.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                  >
                    <FaDirections /> Directions
                  </Button>
                </GymFooter>
              </GymContent>
            </GymCard>
          ))}
        </GymList>
      ) : (
        <NoResults>
          <h2>No gyms found in {selectedCity}</h2>
          <p>We might be coming to your city soon!</p>
        </NoResults>
      )}
    </Container>
  );
};

export default GymLocator;