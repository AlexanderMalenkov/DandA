import React from "react";
import pageStyles from "./../../../page.module.css";
import styles from "./FaqSection.module.css";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqSection = () => {
  return (
    <div className={styles.faqSectionWrapper}>
      <div className={pageStyles.center}>
        <div className={pageStyles.wrapper}>
          <div className={styles.faqContainer}>
            <div>
              <h3 className={styles.faqTitle}>FAQs</h3>
              <h4 className={styles.faqSubtitle}>
                We offer a comprehensive set of features and services to cater
                to customers looking to buy flowers and plants
              </h4>
            </div>
            <div className={styles.faqItemContainer}>
              <Accordion className={styles.accordionSummary}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className={styles.accordionSummary}
                >
                  Quality Guarantee
                </AccordionSummary>
                <AccordionDetails className={styles.AccordionDetails}>
                  We take great care in sourcing and delivering the freshest and
                  highest-quality floral and organic products. If you are not
                  satisfied with the quality of your purchase, please contact us
                  within 14 days of receipt, and we will promptly address your
                  concerns.
                </AccordionDetails>
              </Accordion>
              <Accordion className={styles.accordionSummary}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className={styles.accordionSummary}
                >
                  Plant Health Guarantee
                </AccordionSummary>
                <AccordionDetails className={styles.AccordionDetails}>
                  For our live plants, we guarantee their health and vitality
                  upon arrival. If your plant arrives in poor condition or
                  doesn't thrive within [X] days of receipt, please reach out to
                  our customer service team, and we will provide guidance or
                  arrange for a replacement.
                </AccordionDetails>
              </Accordion>
              <Accordion className={styles.accordionSummary}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className={styles.accordionSummary}
                >
                  Delivery
                </AccordionSummary>
                <AccordionDetails className={styles.AccordionDetails}>
                  We strive to ensure timely and safe delivery of your orders.
                  If your products arrive damaged or do not reach you in the
                  specified time frame, please notify us immediately, and we
                  will work to resolve the issue promptly.
                </AccordionDetails>
              </Accordion>
              <Accordion className={styles.accordionSummary}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className={styles.accordionSummary}
                >
                  Return and Refund Policy
                </AccordionSummary>
                <AccordionDetails className={styles.AccordionDetails}>
                  If you need to return a product for any reason, please contact
                  our customer service team. We accept returns within [X] days
                  of delivery, and we will issue a refund or replacement, as
                  appropriate, in accordance with our return policy.
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
