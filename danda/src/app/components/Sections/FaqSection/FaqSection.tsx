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
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h5>Accordion 1</h5>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </p>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h5>Accordion 1</h5>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </p>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h5>Accordion 1</h5>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </p>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h5>Accordion 1</h5>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </p>
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
