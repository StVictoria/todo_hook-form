import styled from "styled-components";
import { useForm } from "react-hook-form";
import Button from "./Button";

const AddTodoFormStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: #012737;
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
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (values: any) => console.log(values);

  console.log(watch());

  return (
    <AddTodoFormStyled>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <InputStyled
          isError={errors.todoTitle}
          placeholder="Some to do"
          {...register("todoTitle", {
            required: "Write something",
            minLength: { value: 4, message: "Min length is 4" },
          })}
        />

        <Button type="submit" title="Add" />
      </FormStyled>
    </AddTodoFormStyled>
  );
};

export default AddTodoForm;
