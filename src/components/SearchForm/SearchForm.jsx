import { useState } from 'react';
import Select from 'react-select';

import carBrandOptions from '../../data/makes.json';
import { FormContainer, Label, CustomInputRight, CustomInputLeft, StyledButton } from './SearchForm.styled';

const options = carBrandOptions.map((brand) => ({
  value: brand,
  label: brand,
}));

const SearchForm = ({ onSearch }) => {
  const [selectedCarBrand, setSelectedCarBrand] = useState('');
  const [selectedPricePerHour, setSelectedPricePerHour] = useState('');
  const [mileageRange, setMileageRange] = useState({ from: '', to: '' });
  // const dispatch = useDispatch();
  // const login = useSelector(state => state.login.value)

  // const handleCarBrandChange = (selectedOption) => {
  //   setSelectedCarBrand(selectedOption.value);
  // };

  // const handlePricePerHourChange = (e) => {
  //   setSelectedPricePerHour(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   // console.log(form.elements.login.value)
  //   dispatch(logIn(form.elements.login.value))
  //   form.reset()
  // }

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

  const colorStyles = {
    control: (styles) => {
      return {
        ...styles,
        backgroundColor: '#F7F7FB',
        border: '1px solid transparent',
        borderRadius: '14px',
        color: '#121417',
        fontFamily: 'Manrope',
        fontSize: '18px',
        fontWeight: '500',
        lineHeight: '20px',
        padding: '5px 18px',
        width: '100%',
        cursor: 'pointer'
      };
    },
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        color: isDisabled ? '#fff' : isSelected ? '#121417' : 'rgba(18, 20, 23, 0.20)',
        fontSize: isDisabled ? '16px' : '18px',
      };
    },
    singleValue: (styles) => {
      return {
        ...styles,
        color: '#121417',
        fontSize: '18px',
      };
    },
    placeholder: (styles) => ({
      ...styles,
      color: '#121417',
      fontSize: '18px',
    }),
    // menu: (provided) => ({
    //   ...provided,
    //   width: '100%', // фіксована ширина выпадаючого списк
    // }),
  };

  return (
    // <FormContainer onSubmit={handleSubmit}>
    <FormContainer>
      <div>
        <Label htmlFor="carBrand">Car Brand</Label>
        <Select
          name='login'
          defaultValue={selectedCarBrand}
          options={options}
          onChange={setSelectedCarBrand}
          styles={colorStyles}
          placeholder="Enter the text" />
      </div>

      <div>
        <Label htmlFor="pricePerHour">Price/1 hour</Label>
        <Select
          defaultValue={selectedPricePerHour}
          options={priceOptions.map((price) => ({ value: price, label: `$${price}` }))}
          onChange={(selectedOption) => setSelectedPricePerHour(selectedOption.value)}
          styles={colorStyles}
          placeholder="To $"
        />
      </div>

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



