import { ProfileVo } from 'src/infra/data/typeorm/vo/profile.vo';
import { ProfileEducationVo } from 'src/infra/data/typeorm/vo/profile_education.vo';
import { ProfileExperienceVo } from 'src/infra/data/typeorm/vo/profile_experience.vo';
import { ProfileProjectVo } from 'src/infra/data/typeorm/vo/profile_project.vo';
import { ProfileWebsiteVo } from 'src/infra/data/typeorm/vo/profile_website.vo';
import {
  ProfileDto,
  ProfileEducationDto,
  ProfileExperienceDto,
  ProfileProjectDto,
  ProfileWebsiteDto,
} from '../dto/profile.dto';

export interface IProfileService {
  getProfileId(userId: number): Promise<ProfileVo | null>;
  getUserProfile(profileId: number): Promise<ProfileVo | null>;
  getProfileProject(profileId: number): Promise<ProfileProjectVo[] | null>;
  getProfileExperience(
    profileId: number,
  ): Promise<ProfileExperienceVo[] | null>;
  getProfileEducation(profileId: number): Promise<ProfileEducationVo[] | null>;
  getProfileWebsite(profileId: number): Promise<ProfileWebsiteVo[] | null>;
  createProfile(profileDto: ProfileDto): Promise<void>;
  createProfileProject(
    profileProjectDto: ProfileProjectDto,
    profileId: number,
  ): Promise<void>;
  createProfileExperience(
    profileExperienceDto: ProfileExperienceDto,
    profileId: number,
  ): Promise<void>;
  createProfileWebsite(
    profileWebsiteDto: ProfileWebsiteDto,
    profileId: number,
  ): Promise<void>;
  createProfileEducation(
    profileEducationDto: ProfileEducationDto,
    profileId: number,
  ): Promise<void>;
  updateProfile(profileUpdateDto: ProfileDto, profileId: number): Promise<void>;
  updateProfileProject(
    profileProjectUpdateDto: ProfileProjectDto,
    profileId: number,
    projectId: number,
  ): Promise<void>;
  updateProfileExperience(
    profileExperienceUpdateDto: ProfileExperienceDto,
    profileId: number,
    experienceId: number,
  ): Promise<void>;
}
