import styled from "styled-components";
import { useForm } from "react-hook-form";
import Button from "./Button";
import { todoAPI } from "../services/TodoAPI";

const AddTodoFormStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 400px;
  margin-bottom: 40px;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  border-radius: 5px;
`;

const InputWrapper = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
`;

const InputStyled = styled.input<{ isError: boolean }>`
  width: 100%;
  color: white;
  text-align: center;
  padding: 20px;
  background-color: inherit;
  border: 2px dashed
    ${(props: { isError: boolean }) => (props.isError ? "red" : "grey")};
  border-radius: 5px;
  box-sizing: border-box;
`;

const ErrorMessage = styled.p`
  margin: 0;
  margin-top: 15px;
  color: red;
`;

interface IAddTodoFormProps {
  className?: string;
}

const AddTodoForm: React.FC<IAddTodoFormProps> = ({ className }) => {
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [addTodo, {}] = todoAPI.useAddTodoMutation();

  const onSubmit = (values: any) => {
    addTodo(values);
    resetField('title');
  };

  return (
    <AddTodoFormStyled>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <InputStyled
            isError={errors.title}
            placeholder="What do you want to do?"
            {...register("title", {
              required: true,
              minLength: 4,
            })}
          />
          {errors.title && (
            <ErrorMessage>
              Make sure you entered more than 3 characters
            </ErrorMessage>
          )}
        </InputWrapper>

        <Button type="submit" title="Add" />
      </FormStyled>
    </AddTodoFormStyled>
  );
};

export default AddTodoForm;
