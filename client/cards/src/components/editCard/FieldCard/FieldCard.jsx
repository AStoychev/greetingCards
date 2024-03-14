import styles from './FieldCard.module.css';

export const FieldCard = ({
  changeHandler,
  values,
}) => {

  // Empty input string solve idea
  const checkForEmptyInput = (data) => {
    if (!data) {
        return data = '';
    } else {
        return data;
    }
}

  return (
    <div className={styles.fieldCard}>

      <label className={styles.labelContent} htmlFor="title">Title:<span>*</span></label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Title"
        value={values.title}
        onChange={changeHandler}
      />

      <label className={styles.labelContent} htmlFor="description">Description:<span>*</span></label>
      <input
        type="text"
        id="description"
        name="description"
        placeholder="Description"
        value={values.description}
        onChange={changeHandler}
      />

      <label className={styles.labelContent} htmlFor="price">Price:<span>*</span></label>
      <input
        type="number"
        name="price"
        id="price"
        placeholder="0.00"
        value={values.price}
        onChange={changeHandler}
      />

      <label className={styles.labelContent} htmlFor="discount">Discount:</label>
      <input
        type="number"
        name="discount"
        id="discount"
        placeholder="0%"
        value={checkForEmptyInput(values.discount)}
        onChange={changeHandler}
      />

      <label className={styles.labelContent} htmlFor="imageUrl">ImageURL:<span>*</span></label>
      <input
        type="url"
        name="imageUrl"
        id="imageUrl"
        placeholder="https//"
        value={values.imageUrl}
        onChange={changeHandler}
      />

      {/* Additional Image */}
      <label className={styles.labelContent} htmlFor="additionalImageOne">Aditional Image One:</label>
      <input
        type="url"
        name="additionalImageOne"
        id="additionalImageOne"
        placeholder="https//"
        value={checkForEmptyInput(values.additionalImageOne)}
        onChange={changeHandler}
      />

      <label className={styles.labelContent} htmlFor="additionalImageTwo">Aditional Image Two:</label>
      <input
        type="url"
        name="additionalImageTwo"
        id="additionalImageTwo"
        placeholder="https//"
        value={checkForEmptyInput(values.additionalImageTwo)}
        onChange={changeHandler}
      />

      <label className={styles.labelContent} htmlFor="additionalImageThree">Aditional Image Three:</label>
      <input
        type="url"
        name="additionalImageThree"
        id="additionalImageThree"
        placeholder="https//"
        value={checkForEmptyInput(values.additionalImageThree)}
        onChange={changeHandler}
      />

      <label className={styles.labelContent} htmlFor="additionalImageFour">Aditional Image Four:</label>
      <input
        type="url"
        name="additionalImageFour"
        id="additionalImageFour"
        placeholder="https//"
        value={checkForEmptyInput(values.additionalImageFour)}
        onChange={changeHandler}
      />
      {/* Additional Image */}
    </div>
  )
}