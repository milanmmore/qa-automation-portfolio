let UserId: string | null = null;

export function setUserId(id: string) {
  UserId = id;
}

export function getUserId(): string {
  if (UserId === null) {
    UserId = process.env.USER_ID as string;
  }
    return UserId;
  }

