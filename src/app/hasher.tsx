import * as bcrypt from 'bcrypt';

const pepper = process.env.PEPPER_PHRASE;

export async function hash(password: string): Promise<string> {
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password + pepper, salt);
  return hash;
}

export async function verify(password: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(password + pepper, hash);
}




