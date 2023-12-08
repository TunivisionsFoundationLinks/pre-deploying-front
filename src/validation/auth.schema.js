import * as yup from "yup";

const registerValidation = yup.object().shape({
  firstname: yup.string().required().max(255),
  lastname: yup.string().required().max(255),
  password: yup.string().required().max(1024).min(8),
  email: yup.string().email().required(),
  Birthday: yup.date().required(),
  gender: yup.string().required().max(255).oneOf(["male", "female"]),
  region: yup
    .string()
    .required()
    .max(255)
    .oneOf([
      "Ariana",
      "Béja",
      "Ben Arous",
      "Bizerte",
      "Gabès",
      "Gafsa",
      "Jendouba",
      "Kairouan",
      "Kasserine",
      "Kebili",
      "Kef",
      "Mahdia",
      "Manouba",
      "Medenine",
      "Nabeul",
      "Sfax",
      "Sidi Bouzid",
      "Siliana",
      "Sousse",
      "Tataouine",
      "Tozeur",
      "Tunis",
      "Zaghouan",
    ]),
  ConfirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
export { registerValidation };
