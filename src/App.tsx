import { Input, Button } from '@nextui-org/react';
import { useForm, Controller } from 'react-hook-form';

export default function App() {
  const { control, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: {
      a: '',
      b: '',
      c: '',
      d: '',
    },
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <section className="w-[500px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-5 mb-5"
      >
        <Controller
          name="a"
          control={control}
          rules={{ required: 'Please input your name' }}
          render={({ field, fieldState, formState }) => (
            <Input
              {...field}
              label="Name"
              placeholder="please input your name"
              description="description"
              isInvalid={fieldState.invalid}
              errorMessage={formState.errors.a?.message}
            />
          )}
        />

        <Controller
          name="b"
          control={control}
          rules={{ required: 'Please input your name' }}
          render={({ field, fieldState, formState }) => (
            <Input
              {...field}
              label="Name"
              placeholder="please input your name"
              isInvalid={fieldState.invalid}
              errorMessage={formState.errors.b?.message}
            />
          )}
        />

        <Controller
          name="c"
          control={control}
          rules={{ required: 'Please input your name' }}
          render={({ field, fieldState, formState }) => (
            <Input
              {...field}
              label="Name"
              placeholder="please input your name"
              isInvalid={fieldState.invalid}
              errorMessage={formState.errors.c?.message}
            />
          )}
        />

        <Controller
          name="d"
          control={control}
          rules={{ required: 'Please input your name' }}
          render={({ field, fieldState, formState }) => (
            <Input
              {...field}
              label="Name"
              placeholder="please input your name"
              isInvalid={fieldState.invalid}
              errorMessage={formState.errors.d?.message}
            />
          )}
        />

        <Button color="primary" type="submit">
          Submit
        </Button>
      </form>
    </section>
  );
}
