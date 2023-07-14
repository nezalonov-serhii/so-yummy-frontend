
import { Avatar, Box, Input, Button,Form,Pencil,InputWrapper } from './UserProfile.styled';

export const UserProfile = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    return (
      <Box>
        <Avatar />
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <Input type="text" name="name" id="name" placeholder="Enter your name" />
            <Pencil />
          </InputWrapper>
          <Button type="submit">Save changes</Button>
        </Form>
      </Box>
    );
  };


