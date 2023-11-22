export const colorStyles = (width) => {
  return {
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
        padding: '5px 0',
        width,
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
    menu: (provided) => ({    
      ...provided,
      borderRadius: '14px',
      border: '1px solid rgba(18, 20, 23, 0.05)',
      background:' #FFF',
      boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)', 
    }),
    }
  };