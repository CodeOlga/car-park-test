// provided потрібен для успадкування стилів

export const colorStyles = (width) => {
  return {
      control: (provided) => {
      return {
        ...provided,
        backgroundColor: 'var(--input-bg-cl)',
        border: '1px solid transparent',
        borderRadius: '14px',
        color: 'var(--dark-text-cl)',
        fontSize: '18px',
        fontWeight: '500',
        lineHeight: '20px',
        padding: '5px 0',
        width,
        cursor: 'pointer',
        marginTop: '8px'
      };
    },
    option: (provided, { isDisabled, isSelected }) => {
      return {
        ...provided,
        backgroundColor: isSelected ? 'var(--normal-state-bg-cl)' : 'var(--white-cl)',
        color: isDisabled ? 'var(--white-cl)' : isSelected  ? 'var(--dark-text-cl)' : 'var(--backdrop-text-cl)',
        fontSize: isDisabled ? '16px' : '18px',
        borderRadius: '14px',
        transition: 'color 0.3s ease',
        '&:hover': {
          color: 'var(--normal-state-bg-cl)', 
        }
      };
    },
    singleValue: (provided) => {
      return {
        ...provided,
        color: 'var(--dark-text-cl)',
        fontSize: '18px',
      };
    },
    placeholder: (provided) => ({
      ...provided,
      color: 'var(--dark-text-cl)',
      fontSize: '18px',
    }),
    menu: (provided) => ({    
      ...provided,
      borderRadius: '14px',
      border: '1px solid var(--backdrop-border-cl)',
      background: 'var(--white-cl)',
      boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
      overflow: 'hidden',
      padding: '14px 8px 14px 18px',
    }),
    dropdownIndicator: (provided, state) => ({
        ...provided,
        color: 'var(--primary-text-color)',
        cursor: 'pointer',
        transform: state.isFocused ? 'rotate(180deg)' : null,
    }),
    indicatorSeparator: provided => ({
        ...provided,
        backgroundColor:'transparent',
    }),
    menuList: provided => ({
        ...provided,
        '::-webkit-scrollbar': {
            width: '8px',
            height: '130px',
        },
        '::-webkit-scrollbar-thumb': {
            background: 'var(--backdrop-border-cl)',
            borderRadius: '10px',
        },
      })
    }
  };

