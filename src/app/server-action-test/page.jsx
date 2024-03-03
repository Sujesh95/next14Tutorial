import { addPost, deletePost } from "@/lib/server-actions";

const ServerActionTest = () => {
  const actionInComponent = async () => {
    "use server";

    console.log("It works");
  };

  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="description" name="description" />
        <input type="text" placeholder="img" name="img" />
        <input type="text" placeholder="userId" name="userId" />
        <button>Create</button>
      </form>

      <form action={deletePost}>
        <input type="text" placeholder="post id" name="id" />
        <button>Delete</button>
      </form>
    </div>
  );
};

export default ServerActionTest;
