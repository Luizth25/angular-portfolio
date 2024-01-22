// Tipagem da API
export type TUserDataRaw = {
  avatar_url: string;
  html_url: string;
};

export type TUserReposRaw = {
  description: string;
  homepage: string;
  name: string;
  topics: string[];
};

//Tipagem formatada
export type TUserData = {
  avatarUrl: string;
  htmlUrl: string;
};

export type TUserRepos = {
  description: string;
  homepage: string;
  name: string;
  topics: string[];
};
