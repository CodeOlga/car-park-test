const getAge = (rentalConditions) => {
    const result = {};                                       // створюємо обєкт, в який будемо записувати результат
    const ageCondition = rentalConditions.split('\n')[0];    // беремо першу строку з rentalConditions
    const words = ageCondition.split(' ');                   // розбиваємо цю строку на окремі слова
    result.conditionText = words.slice(0, 2).join(' ');      // беремо перші два слова та обєднуємо їх в conditionText
    result.minAge = words[words.length - 1];                 // беремо останнє слово та записуємо його в minAge

    return result;                                           // повертаємо обєкт з результатами
};

export default getAge;
