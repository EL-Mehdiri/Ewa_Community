export { default } from "next-auth/middleware";

export const config = {
    matcher: [
        "/PfeIdeas/newIdea",
        "/PfeIdeas/:id/edite",
        "/SharingLink/newLink",
        "/SharingLink/:id/edite",
        "/News/addNews",
        "/News/:id/edite",
    ]
}