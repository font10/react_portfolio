import PropTypes from "prop-types";

export const InputField = ({ id, label, name, placeholder, defaultValue, type, error, register }) => (
  <div className="flex flex-col mt-2" key={id}>              
    <label htmlFor={name} className="text-sm text-gray-300 font-medium">{label}</label> 
    {
      name === 'mensaje'
      ? <textarea name={name} placeholder={placeholder} rows={5} className="text-[14px] py-1.5 text-gray-900 mt-1 rounded-md px-5 border-2 border-gray-200 border-opacity-80" {...register(name)} />
      : <input type={type} defaultValue={defaultValue} name={name} placeholder={placeholder} className="text-[14px] py-1.5 text-gray-900 mt-1 rounded-md px-5 border-2 border-gray-200 border-opacity-80" {...register(name)} />
    }
    <p className="text-red-400 text-sm font-medium mt-1">{error}</p>            
  </div>
);

InputField.propTypes = {
  error: PropTypes.string,
  register: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  type: PropTypes.string.isRequired,
};
