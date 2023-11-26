import { useState } from 'react';
import Select from 'react-select';

import carBrandOptions from 'data/makes.json';
import formatNumberWithCommas from 'utils/formatNumberWithCommas';
import { FormContainer, BrandPriceWrap, InputMileageWrap, Label, InputMileageText, CustomInputRight, CustomInputLeft, StyledButton } from './SearchForm.styled';
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
        <Label>
          Car Brand
          <Select
            defaultValue={selectedCarBrand}
            options={options}
            onChange={setSelectedCarBrand}
            styles={colorStyles(224)}
            placeholder="Enter the text" />
        </Label>

        <Label>
          Price/1 hour
          <Select
            defaultValue={selectedPricePerHour}
            options={priceOptions.map((price) => ({ value: price, label: `$${price}` }))}
            onChange={(selectedOption) => setSelectedPricePerHour(selectedOption.value)}
            styles={colorStyles(125)}
            placeholder="To $"
          />
        </Label>
      </BrandPriceWrap>

      <InputMileageWrap>
        <Label>
          Сar mileage / km
          <InputMileageText>From</InputMileageText>
          <CustomInputLeft
            required // поле обов'язкове для заповнення 
            type="text"
            value={formatNumberWithCommas(mileageRange.from)}
            onChange={(e) => handleMileageChange('from', e.target.value)}
          />
        </Label>

        <Label style={{ color: "white" }}>
          Сar mileage / km
          <InputMileageText>To</InputMileageText>
          <CustomInputRight
            required
            type="text"
            value={formatNumberWithCommas(mileageRange.to)}
            onChange={(e) => handleMileageChange('to', e.target.value)}
          />
        </Label>
      </InputMileageWrap>

      <StyledButton type="submit" onClick={handleSearch}>
        Search
      </StyledButton>

    </FormContainer>
  );
};

export default SearchForm;





