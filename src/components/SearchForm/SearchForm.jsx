import { useState, useRef } from 'react';
import { useDispatch } from "react-redux";
import Select from 'react-select';

import carBrandOptions from 'data/makes.json';
import { fetchCars } from 'redux/operations';
import { resetFilter, updateFilter } from "redux/filterSlice";
import { generateBrandOptions, generatePriceOptions } from 'utils/selectOptions';
import { formatNumberWithCommas } from 'utils/formatNumberWithCommas';
import { FormContainer, BrandPriceWrap, InputMileageWrap, Label, InputMileageText, CustomInputRight, CustomInputLeft, ButtonResetWrap, StyledButton, ResetIcon, ResetSvg } from './SearchForm.styled';
import { colorStyles } from './ColorStyles';

const optionsBrand = generateBrandOptions(carBrandOptions);
const optionsPrice = generatePriceOptions();

const SearchForm = () => {
  const dispatch = useDispatch();

  // useRef - це React Hook, який дозволяє посилатися на значення, яке не потрібно для рендерингу
  const selectBrandRef = useRef(null);
  const selectPriceRef = useRef(null);

  const [selectedPrice, setSelectedPrice] = useState('');
  // eslint-disable-next-line 
  const [priceOptions, setPriceOptions] = useState([]);
  const [mileageRange, setMileageRange] = useState({ from: '', to: '' });

  // Функція відповідає за змінення обраної цінової опції у формі
  const handlePriceChange = (selectedOption) => {
    if (selectedOption) {
      setSelectedPrice(selectedOption.value);
      setPriceOptions(generatePriceOptions(selectedOption.value));
    }
  };

  // Оновлення стану mileageRange, де одна з його частин (from або to) 
  // оновлюється новим відформатованим значенням (з комою), введеним користувачем в поле пробігу
  const handleMileageChange = (part, value) => {
    const formattedValue = formatNumberWithCommas(value);
    setMileageRange((prevRange) => ({ ...prevRange, [part]: formattedValue }));
  };

  const handleMileageFromChange = (e) => handleMileageChange('from', e.target.value);
  const handleMileageToChange = (e) => handleMileageChange('to', e.target.value);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const brand = form.elements.brand.value.trim();
    const price = form.elements.price.value;

    // Очищення від коми та приведення до числа рядкових значень пробігу 
    const mileageFrom = parseFloat(form.elements.mileageFrom.value.replace(/,/g, ''));
    const mileageTo = parseFloat(form.elements.mileageTo.value.replace(/,/g, ''));

    dispatch(updateFilter({ brand, price, mileageFrom, mileageTo }));
    dispatch(fetchCars());
    form.reset();
    setMileageRange({ from: '', to: '' });

    // Очищуємо значення у випадаючих списках при скиданні фільтра
    selectBrandRef.current.clearValue();
    selectPriceRef.current.clearValue();
  };

  const handleResetClick = () => {
    dispatch(resetFilter());
  };

  return (
    <FormContainer onSubmit={handleSubmitForm}>

      <BrandPriceWrap>
        <Label>
          Car Brand
          <Select
            name="brand"
            options={optionsBrand}
            //  встановлює ref компонента Select у змінну selectBrandRef
            ref={(ref) => (selectBrandRef.current = ref)}
            styles={colorStyles(224)}
            placeholder="Enter the text" />
        </Label>

        <Label>
          Price/1 hour
          <Select
            name="price"
            // логічного значення не має, тільки щоб не сварився лінтер
            defaultValue={selectedPrice}
            options={optionsPrice}
            onChange={handlePriceChange}
            ref={(ref) => (selectPriceRef.current = ref)}
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
            type="text"
            name="mileageFrom"
            value={mileageRange.from}
            onChange={handleMileageFromChange}
            autoComplete="off"
          />
        </Label>

        <Label style={{ color: "white" }}>
          Сar mileage / km
          <InputMileageText>To</InputMileageText>
          <CustomInputRight
            type="text"
            name="mileageTo"
            value={mileageRange.to}
            onChange={handleMileageToChange}
            autoComplete="off"
          />
        </Label>
      </InputMileageWrap>

      <ButtonResetWrap>
        <StyledButton type="submit">
          Search
        </StyledButton>

        <ResetIcon onClick={handleResetClick}>
          <ResetSvg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
            <g id="icomoon-ignore"></g>
            <path d="M128 512h-60c0.022-245.198 198.799-443.961 444-443.961 140.612 0 265.958 65.364 347.31 167.365l0.69 0.896v-66.3h60v210h-210v-60h134.54c-67.689-115.526-191.184-191.903-332.526-192h-0.014c-211.74 0-384 172.26-384 384zM896 512c0 211.74-172.26 384-384 384-141.356-0.097-264.851-76.474-331.559-190.19l-0.981-1.81h134.54v-60h-210v210h60v-66.3c82.042 102.897 207.388 168.261 348 168.261 245.201 0 443.978-198.763 444-443.959v-0.002z"></path>
          </ResetSvg>
        </ResetIcon></ButtonResetWrap>

    </FormContainer>
  );
};

export default SearchForm;

