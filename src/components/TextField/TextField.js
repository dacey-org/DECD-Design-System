import PropTypes from "prop-types";
import { ErrorLabel } from "../ErrorLabel/ErrorLabel";

/**
 * text field component
 */
export function TextField(props) {
  const ifControlledProps = !props.uncontrolled
    ? {
        value: props.value,
      }
    : {};
  return (
    <div
      className={`block leading-tight${
        props.className ? " " + props.className : " mb-10px"
      }`}
    >
      <label
        className={`block leading-tight text-sm lg:text-p font-body mb-5 ${
          props.boldLabel ? "font-bold" : ""
        }`}
        htmlFor={props.id}
      >
        {props.required ? (
          <b className="text-error-border-red">*</b>
        ) : undefined}{" "}
        {props.label}{" "}
        {props.required ? (
          <b className="text-error-border-red">{`(${props.requiredText})`}</b>
        ) : (
          <p className="inline text-form-input-gray text-xs lg:text-sm">
            {`(${props.optionalText})`}
          </p>
        )}
      </label>
      <p
        id={props.describedby}
        className="text-xs lg:text-sm mb-5 leading-30px"
      >
        {`(${props.doNotIncludeText})`}
      </p>
      {props.error ? <ErrorLabel message={props.error} /> : undefined}
      <input
        className={`text-input font-body w-full lg:w-3/4 min-h-40px shadow-sm text-form-input-gray border-2 py-6px px-12px ${
          props.error ? "border-error-border-red" : "border-black"
        } ${props.exclude ? "exclude" : ""}`}
        id={props.id}
        aria-describedby={props.describedby}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        min={props.min}
        max={props.max}
        step={props.step}
        required={props.required}
        onChange={(e) => props.onChange(e.currentTarget.value)}
        {...ifControlledProps}
        data-testid={props.dataTestId}
        data-cy={props.dataCy}
      />
    </div>
  );
}

TextField.defaultProps = {
  value: "",
  type: "text",
};

TextField.propTypes = {
  /**
   * additional css for the component
   */
  className: PropTypes.string,

  /**
   * the id of the text field
   */
  id: PropTypes.string.isRequired,

  /**
   * the name of the text field
   */
  name: PropTypes.string.isRequired,

  /**
   * the label of the text field
   */
  label: PropTypes.string.isRequired,

  /**
   * whether ot not the field is required
   */
  required: PropTypes.bool,
  /**
   * the text to show after the label in parenthesis if the field is required
   */
  requiredText: PropTypes.string.isRequired,

  /**
   * the text to show after the label in parenthesis if the field is optional
   */
  optionalText: PropTypes.string.isRequired,

  /**
   * disclaimer text to not disclose any personal information
   */
  doNotIncludeText: PropTypes.string.isRequired,

  /**
   * value of the text field
   */
  value: PropTypes.string,

  /**
   * placeholder for the text field,
   */
  placeholder: PropTypes.string,

  /**
   * the type of the input
   */
  type: PropTypes.string,

  /**
   * call back for when the value of the text field changes
   */
  onChange: PropTypes.func,

  /**
   * message to display if there is an error
   */
  error: PropTypes.string,

  /**
   * if label should be bold
   */
  boldLabel: PropTypes.bool,

  /**
   * boolean flag to specify that this input should be uncontrolled by react
   */
  uncontrolled: PropTypes.bool,

  /**
   * min value allowed
   */
  min: PropTypes.number,

  /**
   * max value allowed
   */
  max: PropTypes.number,

  /**
   * the legal number of intervals
   */
  step: PropTypes.number,

  /**
   * unit test selector
   */
  dataTestId: PropTypes.string,

  /**
   * cypress tests selector
   */
  dataCy: PropTypes.string,

  /**
   * Exclude option for adding exclude class to the textfield
   */
  exclude: PropTypes.bool,

  /**
   * aria-describedby label id
   */
  describedby: PropTypes.string,
};
