import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { useField } from "formik";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

function MultipleSelect({ options, label, required, ...props }) {
  const classes = useStyles();
  const [field, meta] = useField(props.name);
  const handleChange = (event) => {
    const { value } = event.target;
    field.onChange({ target: { name: props.name, value: value } });
  };

  return (
    <FormControl
      className={`${classes.formControl} w-100`}
      error={meta.touched && meta.error}
    >
      <InputLabel id={`${props.name}-label`} required>
        {label}
      </InputLabel>
      <Select
        labelId={`${props.name}-label`}
        className="w-100"
        id={props.name}
        value={field?.value || []}
        onChange={handleChange}
        {...props}
      >
        {options?.map((option) => (
          <MenuItem key={option.ClubName} value={option._id}>
            {option.ClubName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default MultipleSelect;
