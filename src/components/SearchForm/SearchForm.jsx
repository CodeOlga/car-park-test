import { useState } from 'react';
import Select from 'react-select';

import carBrandOptions from '../../data/makes.json';
import { FormContainer, BrandPriceWrap, Label, CustomInputRight, CustomInputLeft, StyledButton } from './SearchForm.styled';
import { colorStyles } from './ColorStyles';

const options = carBrandOptions.map((brand) => ({
  value: brand,
  label: brand,
}));

const SearchForm = ({ onSearch }) => {
  const [selectedCarBrand, setSelectedCarBrand] = useState('');
  const [selectedPricePerHour, setSelectedPricePerHour] = useState('');
  const [mileageRange, setMileageRange] = useState({ from: '', to: '' });

  const handleMileageChange = (part, value) => {
    setMileageRange((prevRange) => ({ ...prevRange, [part]: value }));
  };

  const priceOptions = Array.from({ length: 10 }, (_, index) => (index + 1) * 10);

  const handleSearch = () => {
    onSearch({
      carBrand: selectedCarBrand,
      pricePerHour: selectedPricePerHour,
    });
  };

  return (
    <FormContainer>

      <BrandPriceWrap>
        <div>
          <Label htmlFor="carBrand">Car Brand</Label>
          <Select
            defaultValue={selectedCarBrand}
            options={options}
            onChange={setSelectedCarBrand}
            styles={colorStyles(224)}
            placeholder="Enter the text" />
        </div>

        <div>
          <Label htmlFor="pricePerHour">Price/1 hour</Label>
          <Select
            defaultValue={selectedPricePerHour}
            options={priceOptions.map((price) => ({ value: price, label: `$${price}` }))}
            onChange={(selectedOption) => setSelectedPricePerHour(selectedOption.value)}
            styles={colorStyles(125)}
            placeholder="To $"
          />
        </div>
      </BrandPriceWrap>

      <div>
        <Label htmlFor="mileage">Car Mileage</Label>
        <div>
          <CustomInputLeft
            type="text"
            placeholder="From"
            value={mileageRange.from}
            onChange={(e) => handleMileageChange('from', e.target.value)}
          />
          <CustomInputRight
            type="text"
            placeholder="To"
            value={mileageRange.to}
            onChange={(e) => handleMileageChange('to', e.target.value)}
          />
        </div>
      </div>

      <StyledButton type="submit" onClick={handleSearch}>
        Search
      </StyledButton>

    </FormContainer>
  );
};

export default SearchForm;



