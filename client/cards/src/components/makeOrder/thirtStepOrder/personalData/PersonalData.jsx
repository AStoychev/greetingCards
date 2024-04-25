import { showMakeOrderData } from '../../../../functions/localStorageFunction/showMakeOrderData';

import styles from './PersonalData.module.css';

export const PersonalData = () => {
    return (
        <div>
            {showMakeOrderData().map((x) => (
                <div className={styles.mainPersonalData} key={x.firstName}>
                    <div className={styles.innerPersonalData}>
                        <div className={styles.typePersonalData}>FULL NAME:</div>
                        <div className={styles.detailedData}>{x.firstName} {x.lastName}</div>
                    </div>
                    <div className={styles.innerPersonalData}>
                        <div className={styles.typePersonalData}>EMAIL:</div>
                        <div className={styles.detailedData}>{x.email}</div>
                    </div>
                    <div className={styles.innerPersonalData}>
                        <div className={styles.typePersonalData}>PHONE NUMBER:</div>
                        <div className={styles.detailedData}>{x.phoneNumber}</div>
                    </div>
                    <div className={styles.typeSeparator}></div>
                    <div className={styles.innerPersonalData}>
                        <div className={styles.typePersonalData}>SHIPPING COMPANY:</div>
                        <div className={styles.detailedData}>{x.shippingCompany}</div>
                    </div>
                    <div className={styles.innerPersonalData}>
                        <div className={styles.typePersonalData}>SHIPPING PLACE:</div>
                        <div className={styles.detailedData}>{x.shippingPlace}</div>
                    </div>
                    <div className={styles.innerPersonalData}>
                        <div className={styles.typePersonalData}>CITY:</div>
                        <div className={styles.detailedData}>{x.city}</div>
                    </div>
                    <div className={styles.innerPersonalData}>
                        <div className={styles.typePersonalData}>POST CODE:</div>
                        <div className={styles.detailedData}>{x.postCode}</div>
                    </div>
                    <div className={styles.innerPersonalData}>
                        <div className={styles.typePersonalData}>ADDRESS:</div>
                        <div className={styles.detailedData}>{x.address}</div>
                    </div>
                    <div className={styles.innerPersonalData}>
                        <div className={styles.typePersonalData}>MESSAGE</div>
                        <div className={styles.detailedData}>{x.takeMessage}</div>
                    </div>
                    <div className={styles.typeSeparator}></div>
                    <div className={styles.innerPersonalData}>
                        <div className={styles.typePersonalData}>PAYMENT:</div>
                        <div className={styles.detailedData}>{x.payment}</div>
                    </div>
                    <div className={styles.typeSeparator}></div>
                    <div className={styles.innerPrivacyPolicy}>
                        I am aware of the privacy policy.
                    </div>
                </div>
            ))}
        </div>
    )
}