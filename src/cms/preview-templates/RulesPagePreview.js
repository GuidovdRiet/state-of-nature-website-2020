import React from "react";
import PropTypes from "prop-types";
import { HouseRulesTemplate } from "../../templates/house-rules";

const AboutPagePreview = ({ entry, widgetFor }) => (
  <HouseRulesTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default AboutPagePreview;
