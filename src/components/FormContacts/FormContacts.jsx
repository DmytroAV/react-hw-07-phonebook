import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormError } from '../FormError/FormError';
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form';
import { isValidPhoneNumber } from 'react-phone-number-input';
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from 'react-country-region-selector';
import {
  Container,
  Title,
  ContainerForm,
  LabelInput,
  InputField,
  BtnAddContacts,
  ImgAvatar,
} from './FormContacts.styled';
import 'react-phone-number-input/style.css';

const phoneRegex =
  /^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/im;
/* supports following number formats - (123) 456-7890, (123)456-7890, 123-456-7890, 123.456.7890, 1234567890, +31636363634, 075-63546725 */
// const phoneRegExp = /^\+38\s\(\d{3}\)\s(\d{3})-(\d{2})-(\d{2})$/;

const validationSchema = yup.object().shape({
  firstName: yup.string().label('First Name').trim().min(3).max(10).required(),
  lastName: yup.string().label('Last Name').trim().min(3).max(10).required(),
  job_title: yup.string().label('Address Street').required(),
  user_country: yup.string().label('Country').required(),
  user_region: yup.string().label('Region').required(),
  code_country: yup.string().label('Code Country').required(),
  address_street: yup.string().label('Address Street').required(),
  email: yup.string().email().label('Email').required(),
  phone: yup
    .string()
    .matches(phoneRegex, 'Phone number is not valid')
    .required('Mobile Phone is required'),
});

const FormContacts = ({ initialValues, onSubmit, title, textBtn }) => {
  const {
    handleSubmit,
    control,
    reset,
    formState,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]);

  const wrapperCountryNumb = value => {
    const codeCountry = CountryRegionData.filter(
      item => item[0] === value
    )[0][1];
    return codeCountry;
  };

  return (
    <Container>
      {formState.isSubmitSuccessful && <Navigate to={'/contacts'} />}
      <Title>{title}</Title>
      <ContainerForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="avatar"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value, name } }) => (
            <LabelInput htmlFor={name}>
              <ImgAvatar
                name={name}
                autoComplete="off"
                src={value}
                onBlur={onBlur}
                onChange={onChange}
                autoFocus
                $mode={errors.name}
                $capitalize
                type="text"
                placeholder="avatar"
              />

              {errors.name && <FormError message={errors?.firstName.message} />}
            </LabelInput>
          )}
        />
        <Controller
          name="firstName"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value, name } }) => (
            <LabelInput htmlFor="firstName">
              First Name
              <InputField
                name={name}
                autoComplete="off"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                autoFocus
                $mode={errors.firstName}
                $capitalize
                type="text"
                placeholder="Enter First Name"
              />
              {errors.firstName && (
                <FormError message={errors?.firstName.message} />
              )}
            </LabelInput>
          )}
        />
        <Controller
          name="lastName"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <LabelInput htmlFor="lastName">
              Last Name
              <InputField
                name="lastName"
                autoComplete="off"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                $mode={errors.lastName}
                $capitalize
                type="text"
                placeholder="Enter Last Name"
              />
              {errors.lastName && (
                <FormError message={errors?.lastName.message} />
              )}
            </LabelInput>
          )}
        />
        <Controller
          name="job_title"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value, name } }) => (
            <LabelInput htmlFor="job_title">
              job_title
              <InputField
                name={name}
                autoComplete="off"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                $mode={errors.job_title}
                $capitalize
                type="job_title"
                placeholder="Enter job title"
              />
              {errors.job_title && (
                <FormError message={errors?.job_title.message} />
              )}
            </LabelInput>
          )}
        />
        <Controller
          name="user_country"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value, name } }) => (
            <LabelInput htmlFor="user_country">
              Country
              <CountryDropdown
                name={name}
                autoComplete="off"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                $mode={errors.country}
                type="text"
                defaultOptionLabel="Enter country"
              />
              {errors.user_country && (
                <FormError message={errors?.user_country.message} />
              )}
            </LabelInput>
          )}
        />
        <Controller
          name="user_region"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value, name } }) => (
            <LabelInput htmlFor="user_region">
              Region
              <RegionDropdown
                name={name}
                autoComplete="off"
                country={watch('user_country')}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                $mode={errors.user_region}
                type="text"
                defaultOptionLabel="Enter region"
              />
              {errors.user_region && (
                <FormError message={errors?.user_region.message} />
              )}
            </LabelInput>
          )}
        />
        <Controller
          name="code_country"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value, name } }) => (
            <LabelInput htmlFor="code_country">
              Code Country
              <InputField
                name={name}
                autoComplete="off"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                $mode={errors.code_country}
                type="code_country"
                placeholder="Enter code country"
              />
              {errors.code_country && (
                <FormError message={errors?.code_country.message} />
              )}
            </LabelInput>
          )}
        />
        <Controller
          name="address_street"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value, name } }) => (
            <LabelInput htmlFor="address_street">
              Address Street
              <InputField
                name={name}
                autoComplete="off"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                $mode={errors.address_street}
                type="address_street"
                placeholder="Enter address street"
              />
              {errors.address_street && (
                <FormError message={errors?.address_street.message} />
              )}
            </LabelInput>
          )}
        />
        <Controller
          name="phone"
          control={control}
          rules={{
            validate: value => isValidPhoneNumber(value),
          }}
          render={({ field: { onChange, onBlur, value, name } }) => (
            <LabelInput htmlFor="phone">
              Phone
              <PhoneInputWithCountry
                name={name}
                placeholder="Enter phone number"
                control={control}
                rules={{ required: true }}
                defaultCountry={
                  watch('user_country') &&
                  wrapperCountryNumb(watch('user_country'))
                }
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                inputComponent={InputField}
                initialValueFormat="national"
                international={true}
                limitMaxLength={true}
                autoComplete="off"
                id="phone"
              />
              {errors.phone && <FormError message={errors?.phone.message} />}
            </LabelInput>
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value, name } }) => (
            <LabelInput htmlFor="email">
              Email
              <InputField
                name={name}
                autoComplete="off"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                $mode={errors.email}
                type="email"
                placeholder="Enter Email"
              />
              {errors.email && <FormError message={errors?.email.message} />}
            </LabelInput>
          )}
        />

        <BtnAddContacts type="submit" disabled={isSubmitting || !isValid}>
          {textBtn}
        </BtnAddContacts>
      </ContainerForm>
    </Container>
  );
};

FormContacts.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  textBtn: PropTypes.string.isRequired,
};

export default FormContacts;
