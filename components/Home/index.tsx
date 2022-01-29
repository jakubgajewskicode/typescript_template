import { useState, useEffect, ChangeEvent, Fragment } from 'react';

import {
  Form,
  Input,
  Grid,
  PropertyTypes,
  SearchSection,
  StyledUl,
  StyledLi,
  Label,
  SearchResults,
  Wrapper,
  Table,
  TH,
  TD,
  TickWrapper,
  SelectedProperties,
  ButtonContainer,
  StyledTBody,
  StyledLabel,
  StyledCheckbox,
} from './ui';

import Header from '../Header/';
import Tick from './tick';
import { Button } from '../../utils/button';

import {
  fetchProperties,
  fetchPropertyDetails,
  getAvailablePropertyTypes,
} from './api';

import {
  CurrentPropertiesTypes,
  PropertyDetailsTypes,
  SelectedTypes,
  propertyPropTypes,
} from './propertySearchTypes';

const Home = () => {
  const [propertyListType, setPropertyType] = useState<any>([]);
  const [currentProperties, setCurrentProperties] =
    useState<CurrentPropertiesTypes>({});
  const [propertyDetails, setDetails] = useState<PropertyDetailsTypes[]>([]);
  const [selectedValue, setSelectedValue] = useState<SelectedTypes[]>([]);

  const [props, setProps] = useState<propertyPropTypes>({
    address: '',
    id: '',
    propertyType: undefined,
  });

  const handleOnSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    (async () => {
      try {
        const products = await fetchProperties(props);
        setCurrentProperties(products);
      } catch (error) {
        console.log('error');
      }
    })();
  };

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (currentProperties.properties !== undefined) {
        const dataArray = currentProperties.properties.map((item) => {
          return item.id;
        });
        dataArray.forEach(async (item: any) => {
          const fetch = await fetchPropertyDetails(item);

          setDetails((prevState: any) => [...prevState, fetch]);
        });
      } else null;

      setDetails([]);
    };
    fetchPropertyData().catch(console.error);
  }, [currentProperties]);

  useEffect(() => {
    (async () => {
      try {
        const propertyTypes = await getAvailablePropertyTypes();
        setPropertyType(propertyTypes);
      } catch (error) {
        console.log('property type error');
      }
    })();
  }, [currentProperties]);

  const handleTypeClick = (value: any) => {
    setProps((state) => {
      return {
        ...state,
        propertyType: value,
      };
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    e.persist();
    setProps((state) => {
      return {
        ...state,
        address: e.target.value,
      };
    });
  };

  const handleCheckboxClick = (value: string) => {
    setSelectedValue((prevState: any) => [...prevState, value]);

    if (selectedValue.find((element) => element === value)) {
      setSelectedValue(selectedValue.filter((item) => item !== value));
    }
  };

  return (
    <Wrapper>
      <Header />
      <Grid>
        <PropertyTypes>
          <Label>Property types</Label>
          {propertyListType.propertyTypes && (
            <StyledUl>
              <StyledLi
                onClick={() => {
                  handleTypeClick(undefined);
                }}
              >
                All
              </StyledLi>
              {propertyListType.propertyTypes.map((item: any, i: number) => (
                <StyledLi
                  onClick={() => {
                    handleTypeClick(item.value);
                  }}
                  key={i}
                >
                  {item.label}
                </StyledLi>
              ))}
            </StyledUl>
          )}
        </PropertyTypes>
        <SearchSection>
          <StyledLabel htmlFor="search">Search</StyledLabel>
          <Form onSubmit={handleOnSubmit}>
            <Input
              value={props.address}
              onChange={(e) => {
                handleInputChange(e);
              }}
              placeholder="Address"
              type="text"
              id="search"
            />
            <ButtonContainer>
              <Button>Search</Button>
            </ButtonContainer>
          </Form>
        </SearchSection>
        <SelectedProperties>
          <StyledLabel>Selected properties</StyledLabel>
          <Table>
            <thead>
              <tr>
                <TH>Address</TH>
                <TH>Postcode</TH>
                <TH>Number of rooms</TH>
                <TH>
                  Floor area <sup>(m2)</sup>
                </TH>
              </tr>
            </thead>

            {propertyDetails.map((item: any, i: number) => (
              <Fragment key={` ${item.id} - ${i}`}>
                <StyledTBody>
                  <tr>
                    {selectedValue.map((selected: any, i: number) => (
                      <Fragment key={`${selected} - ${i}`}>
                        {selected === item.property.id && (
                          <Fragment>
                            <TD>{item.property.address}</TD>
                            <TD>{item.property.postcode}</TD>
                            <TD>{item.property.numberOfRooms}</TD>
                            <TD>{item.property.floorArea}</TD>
                          </Fragment>
                        )}
                      </Fragment>
                    ))}
                  </tr>
                </StyledTBody>
              </Fragment>
            ))}
          </Table>
        </SelectedProperties>
        <SearchResults>
          <StyledLabel>Search results</StyledLabel>
          <Table>
            <thead>
              <tr>
                <TH>
                  <TickWrapper>
                    <Tick />
                  </TickWrapper>
                </TH>
                <TH>Address</TH>
                <TH>Postcode</TH>
                <TH>Property Type</TH>
                <TH>Number of rooms</TH>
                <TH>
                  Floor area <sup>(m2)</sup>
                </TH>
              </tr>
            </thead>
            {currentProperties.properties && (
              <Fragment>
                {currentProperties.properties.map(
                  (property: any, i: number) => (
                    <StyledTBody key={`${property.id} - ${i}`}>
                      <tr>
                        <TD>
                          <StyledCheckbox
                            onClick={() => handleCheckboxClick(property.id)}
                            type="checkbox"
                            name="property"
                            id="property"
                          />
                        </TD>
                        <TD>{property.address}</TD>
                        <TD>{property.postcode}</TD>
                        <TD>{property.propertyType}</TD>
                        {propertyDetails && (
                          <Fragment>
                            {propertyDetails.map((item: any, i: number) => {
                              return (
                                <Fragment key={`${item.property.id} - ${i}`}>
                                  {property.id === item.property.id && (
                                    <Fragment>
                                      <TD>{item.property.numberOfRooms}</TD>
                                      <TD>{item.property.floorArea}</TD>
                                    </Fragment>
                                  )}
                                </Fragment>
                              );
                            })}
                          </Fragment>
                        )}
                      </tr>
                    </StyledTBody>
                  )
                )}
              </Fragment>
            )}
          </Table>
        </SearchResults>
      </Grid>
    </Wrapper>
  );
};

export default Home;
