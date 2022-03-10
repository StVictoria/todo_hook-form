import styled from "styled-components";
import { useForm } from "react-hook-form";
import Button from "./Button";
import { todoAPI } from "../services/TodoAPI";

const AddTodoFormStyled = styled.div`
  display: flex;
  justify-content: center;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  border-radius: 5px;
`;

const InputStyled = styled.input<{ isError: boolean }>`
  width: 200px;
  padding: 5px;
  border: 2px solid
    ${(props: { isError: boolean }) => (props.isError ? "red" : "grey")};
  border-radius: 5px;
  margin-bottom: 20px;
`;

interface IAddTodoFormProps {
  className?: string;
}

const AddTodoForm: React.FC<IAddTodoFormProps> = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [addTodo, {}] = todoAPI.useAddTodoMutation();

  const onSubmit = (values: any) => {
    addTodo(values);
  };

  return (
    <AddTodoFormStyled>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <InputStyled
          isError={errors.todoTitle}
          placeholder="Some to do"
          {...register("title", {
            required: "Write something",
            minLength: 4,
          })}
        />

        <Button type="submit" title="Add" />
      </FormStyled>
    </AddTodoFormStyled>
  );
};

export default AddTodoForm;
