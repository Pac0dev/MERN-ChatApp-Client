import {useState} from "react"

const useForm = (initialState = {}) => {
	const [formValues, setFormValues] = useState(initialState);
	const reset = () => setFormValues(initialState);

	const handleInputChange = (e) => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		})
	}

	return [formValues, handleInputChange, reset];
}
export default useForm;
