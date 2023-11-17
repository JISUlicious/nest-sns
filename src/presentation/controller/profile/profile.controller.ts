import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  HttpException,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import {
  ProfileDto,
  ProfileEducationDto,
  ProfileExperienceDto,
  ProfileProjectDto,
  ProfileWebsiteDto,
} from 'src/domain/service/dto/profile.dto';

import { PROFILE_SERVICE } from 'src/domain/service/ioc';
import { IProfileService } from 'src/domain/service/profile/profile.service.interface';
import { ProfileVo } from 'src/infra/data/typeorm/vo/profile.vo';
import { ProfileEducationVo } from 'src/infra/data/typeorm/vo/profile_education.vo';
import { ProfileExperienceVo } from 'src/infra/data/typeorm/vo/profile_experience.vo';
import { ProfileProjectVo } from 'src/infra/data/typeorm/vo/profile_project.vo';
import { ProfileWebsiteVo } from 'src/infra/data/typeorm/vo/profile_website.vo';
import { SecurityServiceImpl } from 'src/domain/service/security/impl/security.service.implement';
import { AuthUser } from 'src/domain/interactor/decorator/auth.decorator';
import { AuthGuard } from 'src/domain/interactor/guard/auth.guard';

@Controller('/profile')
@UseGuards(AuthGuard)
export class ProfileController {
  constructor(
    @Inject(PROFILE_SERVICE) private readonly profileService: IProfileService,
    private readonly securityService: SecurityServiceImpl,
  ) {}

  @Get('/profileId')
  async getProfileId(@AuthUser() userId: number): Promise<ProfileVo | null> {
    return await this.profileService.getProfileId(userId);
  }

  @Get('/:profileId')
  async getUserProfile(
    @Param('profileId') profileId: number,
  ): Promise<ProfileVo | null> {
    return await this.profileService.getUserProfile(profileId);
  }

  @Get('/:profileId/project')
  async getProfileProject(
    @Param('profileId') profileId: number,
  ): Promise<ProfileProjectVo[] | null> {
    return await this.profileService.getProfileProject(profileId);
  }

  @Get('/:profileId/experience')
  async getProfileExperience(
    @Param('profileId') profileId: number,
  ): Promise<ProfileExperienceVo[] | null> {
    return await this.profileService.getProfileExperience(profileId);
  }

  @Get('/:profileId/education')
  async getProfileEducation(
    @Param('profileId') profileId: number,
  ): Promise<ProfileEducationVo[] | null> {
    return await this.profileService.getProfileEducation(profileId);
  }

  @Get('/:profileId/website')
  async getProfileWebsite(
    @Param('profileId') profileId: number,
  ): Promise<ProfileWebsiteVo[] | null> {
    return await this.profileService.getProfileWebsite(profileId);
  }

  @Post()
  async createProfile(
    @AuthUser() userId: number,
    @Body() body: Partial<ProfileDto>,
  ): Promise<void> {
    const profileDto: ProfileDto = {
      userId: userId,
      jobDescription: body.jobDescription,
      about: body.about,
      location: body.location,
      address: body.address,
    };
    return await this.profileService.createProfile(profileDto);
  }

  @Post('/:profileId/project')
  async createProfileProject(
    @AuthUser() userId: number,
    @Param('profileId') profileId: number,
    @Body() body: Partial<ProfileProjectDto>,
  ): Promise<void> {
    if (!body.title || !body.startDate)
      throw new HttpException('KEY_ERROR', HttpStatus.BAD_REQUEST);
    const profileProjectDto: ProfileProjectDto = {
      userId: userId,
      title: body.title!,
      description: body.description,
      startDate: body.startDate!,
      endDate: body.endDate,
      projectImages: body.projectImages,
      projectCategory: body.projectCategory,
    };

    return await this.profileService.createProfileProject(
      profileProjectDto,
      profileId,
    );
  }

  @Post('/:profileId/experience')
  async createProfileExperience(
    @AuthUser() userId: number,
    @Param('profileId') profileId: number,
    @Body() body: Partial<ProfileExperienceDto>,
  ): Promise<void> {
    if (!body.position || !body.startDate)
      throw new HttpException('KEY_ERROR', HttpStatus.BAD_REQUEST);
    const profileExperienceDto: ProfileExperienceDto = {
      userId: userId,
      position: body.position!,
      description: body.description,
      startDate: body.startDate!,
      endDate: body.endDate,
      experienceCompany: body.experienceCompany,
    };

    return await this.profileService.createProfileExperience(
      profileExperienceDto,
      profileId,
    );
  }

  @Post('/:profileId/education')
  async createProfileEducation(
    @AuthUser() userId: number,
    @Param('profileId') profileId: number,
    @Body() body: Partial<ProfileEducationDto>,
  ): Promise<void> {
    if (!body.course || !body.startDate)
      throw new HttpException('KEY_ERROR', HttpStatus.NOT_FOUND);
    const profileEducationDto: ProfileEducationDto = {
      userId: userId,
      course: body.course!, // 학과, 전공 설명 입력
      description: body.description, // 추가 정보
      startDate: body.startDate!,
      endDate: body.endDate,
      educationInstitute: body.educationInstitute!,
    };
    return await this.profileService.createProfileEducation(
      profileEducationDto,
      profileId,
    );
  }

  @Post('/:profileId/website')
  async createProfileWebsite(
    @AuthUser() userId: number,
    @Param('profileId') profileId: number,
    @Body() body: Partial<ProfileWebsiteDto>,
  ): Promise<void> {
    if (!body.type || !body.url)
      throw new HttpException('KEY_ERROR', HttpStatus.BAD_REQUEST);
    const profileWebsiteDto: ProfileWebsiteDto = {
      userId: userId,
      type: body.type!,
      url: body.url!,
    };

    return await this.profileService.createProfileWebsite(
      profileWebsiteDto,
      profileId,
    );
  }
}
