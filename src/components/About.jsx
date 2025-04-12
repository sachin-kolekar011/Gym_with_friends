


// AboutUsPage.jsx
// AboutUsPage.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import gymFacilityImg from '../assets/gymfacility.jpg';
import appDashboardImg from '../assets/gymfacility.jpg';
import fitnessTeamImg from '../assets/fitness_trainers.png';
import nutritionDisplayImg from '../assets/fitness_trainers.png'
import cityMapImg from '../assets/fitness_trainers.png';

// Styled Components
const AboutRoot = styled.div`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #1a1a1a;
  line-height: 1.5;
`;

const MainBanner = styled.div`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.7) 100%), 
              url(${gymFacilityImg}) center/cover no-repeat;
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: 0 5vw;
`;

const BannerInner = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const MainTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #ffffff;
  line-height: 1.2;
`;

const BannerText = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.9);
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const PrimaryButton = styled(Link)`
  background-color: #0066ff;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: #0052cc;
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled(Link)`
  background-color: transparent;
  color: white;
  border: 2px solid white;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const ViewSelector = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 2rem 0;
  background-color: #f8f9fa;
  flex-wrap: wrap;
`;

const ViewButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  background: none;
  font-weight: 600;
  cursor: pointer;
  border-radius: 50px;
  transition: all 0.3s ease;
  background-color: ${props => props.$active ? '#0066ff' : 'transparent'};
  color: ${props => props.$active ? 'white' : '#1a1a1a'};

  &:hover {
    background-color: ${props => props.$active ? '#0066ff' : '#e9ecef'};
  }
`;

const DynamicArea = styled.div`
  padding: 4rem 5vw;
  max-width: 1400px;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  &.reverse {
    direction: rtl;
  }
  
  &.reverse > * {
    direction: ltr;
  }
`;

const ContentDescription = styled.div`
  max-width: 600px;
`;

const ViewTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
`;

const ViewText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #4a4a4a;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 2rem;
`;

const FeatureItem = styled.li`
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;

  &:before {
    content: '•';
    color: #0066ff;
    font-size: 1.5rem;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const ContentVisual = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const ContentImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const ImageOverlayButton = styled.button`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(0, 102, 255, 0.9);
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
`;

const FeatureCard = styled.div`
  padding: 1.5rem;
  border-radius: 8px;
  background-color: #f8f9fa;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureCardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
`;

const FeatureCardText = styled.p`
  font-size: 0.9rem;
  color: #6c757d;
`;

const ExpansionSection = styled.section`
  text-align: center;
  padding: 4rem 5vw;
  background-color: #f8f9fa;
`;

const ExpansionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ExpansionText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 3rem;
  color: #4a4a4a;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const LocationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const LocationCard = styled.div`
  padding: 1.5rem;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &.coming-soon {
    opacity: 0.8;
  }

  &.open-now {
    border: 2px solid #0066ff;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const LocationCardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const LocationCardText = styled.p`
  font-size: 0.9rem;
  color: #6c757d;
  margin-bottom: 1rem;
`;

const SmallButton = styled(Link)`
  display: inline-block;
  background-color: #0066ff;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.8rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0052cc;
  }
`;

const SpecialistsSection = styled.section`
  padding: 4rem 5vw;
  text-align: center;
`;

const SpecialistsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const SpecialistsSubtitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: 3rem;
  color: #4a4a4a;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const SpecialistsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SpecialistCard = styled.div`
  padding: 1.5rem;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const SpecialistImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const SpecialistName = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const SpecialistBio = styled.p`
  font-size: 0.9rem;
  color: #6c757d;
`;

const FinalCTA = styled.section`
  padding: 6rem 5vw;
  text-align: center;
  background-color: #0066ff;
  color: white;
`;

const FinalCTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const FinalCTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const AboutUsPage = () => {
  const [currentView, setCurrentView] = useState('premises');

  return (
    <AboutRoot>
      <MainBanner>
        <BannerInner>
          <MainTitle>Transforming Fitness with Innovation</MainTitle>
          <BannerText>Fresh spaces, advanced tracking, and personalized nutrition across India</BannerText>
          <ActionButtons>
            <PrimaryButton to="/membership">Explore Plans</PrimaryButton>
            <SecondaryButton to="/contact">Get Free Trial</SecondaryButton>
          </ActionButtons>
        </BannerInner>
      </MainBanner>

      <ViewSelector>
        <ViewButton 
          $active={currentView === 'premises'}
          onClick={() => setCurrentView('premises')}
        >
          Our Spaces
        </ViewButton>
        <ViewButton 
          $active={currentView === 'tech'}
          onClick={() => setCurrentView('tech')}
        >
          Digital Tools
        </ViewButton>
        <ViewButton 
          $active={currentView === 'fuel'}
          onClick={() => setCurrentView('fuel')}
        >
          Nutrition
        </ViewButton>
        <ViewButton 
          $active={currentView === 'growth'}
          onClick={() => setCurrentView('growth')}
        >
          Expansion
        </ViewButton>
      </ViewSelector>

      <DynamicArea>
        {currentView === 'premises' && (
          <ContentWrapper>
            <ContentDescription>
              <ViewTitle>Pristine Fitness Environments</ViewTitle>
              <ViewText>Every Silver Fitness location offers untouched equipment in architect-designed spaces.</ViewText>
              <FeatureList>
                <FeatureItem>Unused premium equipment sets</FeatureItem>
                <FeatureItem>Engineered workout flow layouts</FeatureItem>
                <FeatureItem>Hospital-grade air systems</FeatureItem>
                <FeatureItem>UV sterilization protocols</FeatureItem>
              </FeatureList>
            </ContentDescription>
            <ContentVisual>
              <ContentImage src={gymFacilityImg} alt="Unused gym facility" />
              <ImageOverlayButton onClick={() => setCurrentView('growth')}>
                View Our Locations
              </ImageOverlayButton>
            </ContentVisual>
          </ContentWrapper>
        )}

        {currentView === 'tech' && (
          <ContentWrapper className="reverse">
            <ContentVisual>
              <ContentImage src={appDashboardImg} alt="Fitness dashboard" />
              <ImageOverlayButton onClick={() => window.location.href = '/trial'}>
                Experience Demo
              </ImageOverlayButton>
            </ContentVisual>
            <ContentDescription>
              <ViewTitle>Intelligent Fitness Systems</ViewTitle>
              <ViewText>Our proprietary platform provides real-time biometric tracking and form analysis.</ViewText>
              <FeaturesGrid>
                <FeatureCard>
                  <FeatureCardTitle>Movement Capture</FeatureCardTitle>
                  <FeatureCardText>3D exercise analysis</FeatureCardText>
                </FeatureCard>
                <FeatureCard>
                  <FeatureCardTitle>Exercise Library</FeatureCardTitle>
                  <FeatureCardText>500+ technique videos</FeatureCardText>
                </FeatureCard>
                <FeatureCard>
                  <FeatureCardTitle>Progress Analytics</FeatureCardTitle>
                  <FeatureCardText>Detailed performance metrics</FeatureCardText>
                </FeatureCard>
                <FeatureCard>
                  <FeatureCardTitle>Adaptive Coaching</FeatureCardTitle>
                  <FeatureCardText>AI-adjusted workouts</FeatureCardText>
                </FeatureCard>
              </FeaturesGrid>
            </ContentDescription>
          </ContentWrapper>
        )}

        {currentView === 'fuel' && (
          <ContentWrapper>
            <ContentDescription>
              <ViewTitle>Precision Nutrition Framework</ViewTitle>
              <ViewText>Customized dietary programming based on local availability and biometrics.</ViewText>
              <FeaturesGrid>
                <FeatureCard>
                  <FeatureCardTitle>Tailored Meal Blueprints</FeatureCardTitle>
                  <FeatureCardText>Goal-specific nutrition plans</FeatureCardText>
                </FeatureCard>
                <FeatureCard>
                  <FeatureCardTitle>Regional Ingredient Matching</FeatureCardTitle>
                  <FeatureCardText>Local market integrations</FeatureCardText>
                </FeatureCard>
                <FeatureCard>
                  <FeatureCardTitle>Biometric Synchronization</FeatureCardTitle>
                  <FeatureCardText>Workout-nutrition alignment</FeatureCardText>
                </FeatureCard>
              </FeaturesGrid>
              <PrimaryButton to="/nutrition" style={{ marginTop: '2rem' }}>Explore Food Plans</PrimaryButton>
            </ContentDescription>
            <ContentVisual>
              <ContentImage src={nutritionDisplayImg} alt="Nutrition planning" />
            </ContentVisual>
          </ContentWrapper>
        )}

        {currentView === 'growth' && (
          <ExpansionSection>
            <ExpansionTitle>Strategic National Presence</ExpansionTitle>
            <ExpansionText>Bringing our fitness ecosystem to major Indian metros</ExpansionText>
            <LocationsGrid>
              <LocationCard className="coming-soon">
                <LocationCardTitle>Delhi</LocationCardTitle>
                <LocationCardText>Q3 2023 Launch</LocationCardText>
              </LocationCard>
              <LocationCard className="coming-soon">
                <LocationCardTitle>Mumbai</LocationCardTitle>
                <LocationCardText>Q4 2023 Launch</LocationCardText>
              </LocationCard>
              <LocationCard className="open-now">
                <LocationCardTitle>Bangalore</LocationCardTitle>
                <LocationCardText>Operational Now</LocationCardText>
                <SmallButton to="/bangalore">Location Details</SmallButton>
              </LocationCard>
              <LocationCard className="coming-soon">
                <LocationCardTitle>Hyderabad</LocationCardTitle>
                <LocationCardText>Q1 2024 Launch</LocationCardText>
              </LocationCard>
              <LocationCard className="coming-soon">
                <LocationCardTitle>Pune</LocationCardTitle>
                <LocationCardText>Q2 2024 Launch</LocationCardText>
              </LocationCard>
            </LocationsGrid>
          </ExpansionSection>
        )}
      </DynamicArea>

      <SpecialistsSection>
        <SpecialistsTitle>Our Movement Experts</SpecialistsTitle>
        <SpecialistsSubtitle>Certified professionals across all fitness domains</SpecialistsSubtitle>
        <SpecialistsGrid>
          <SpecialistCard>
            <SpecialistImage src={fitnessTeamImg} alt="Strength specialist" />
            <SpecialistName>Strength Conditioning</SpecialistName>
            <SpecialistBio>Power and hypertrophy development</SpecialistBio>
          </SpecialistCard>
          <SpecialistCard>
            <SpecialistImage src={fitnessTeamImg} alt="Cardio coach" />
            <SpecialistName>Metabolic Training</SpecialistName>
            <SpecialistBio>Endurance and fat oxidation</SpecialistBio>
          </SpecialistCard>
          <SpecialistCard>
            <SpecialistImage src={fitnessTeamImg} alt="Functional trainer" />
            <SpecialistName>Movement Integration</SpecialistName>
            <SpecialistBio>Daily activity enhancement</SpecialistBio>
          </SpecialistCard>
          <SpecialistCard>
            <SpecialistImage src={fitnessTeamImg} alt="Recovery expert" />
            <SpecialistName>Regeneration</SpecialistName>
            <SpecialistBio>Mobility and injury mitigation</SpecialistBio>
          </SpecialistCard>
        </SpecialistsGrid>
      </SpecialistsSection>

      <FinalCTA>
        <FinalCTATitle>Begin Your Transformation Today</FinalCTATitle>
        <FinalCTAButtons>
          <PrimaryButton to="/membership" style={{ background: 'white', color: '#0066ff' }}>Become Member</PrimaryButton>
          <SecondaryButton to="/contact" style={{ borderColor: 'white', color: 'white' }}>Connect Us</SecondaryButton>
        </FinalCTAButtons>
      </FinalCTA>
    </AboutRoot>
  );
};

export default AboutUsPage;