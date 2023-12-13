import { contactSchema } from "../../../validations/contactSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { inputsContact } from "../../../utils/constants";
import { InputField } from "../../InputField/InputField";
import { sendEmailService } from "../../../services/email.api";
import { getToast } from "../../../utils/functions";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = async (formInputs) => {
    const res = await sendEmailService(formInputs)
    console.log(res)
    if(res.status === 200) {
      getToast( 'success', res?.data?.message)
      reset()
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-2" 
      data-aos="fade-up" 
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
    >
      <fieldset>
        <section className="flex flex-col sm:flex-col gap-3">
          {
            inputsContact.map(input => (
              <InputField
                key={input.id}
                id={input.id}
                label={input.label}
                name={input.name}
                placeholder={input.placeholder}
                type={input.type}
                error={errors[input.name]?.message}
                register ={register}
              />
            ))
          } 
        </section>
        <button className="bg-gradient-to-r from-pink-600 hover:from-pink-500 via-red-500 hover:via-red-500 hover:to-orange-400 to-red-400 text-white font-lato text-sm w-full font-semibold py-2.5 px-4 rounded-md mt-5">
          Enviar
        </button>
      </fieldset>
    </form>
  );
};
