import { Sandbox } from "../../modules/sandbox";
import { Category } from "./category";
import { Module, ModuleWithProgress } from "./module";
import { Pagination } from "./pagination";

// Status
export const STATUS_COMPLETED = 'completed'
export const STATUS_ACTIVE = 'active'
export const STATUS_DRAFT = 'draft'
export const STATUS_TEST = 'test'
export const STATUS_DISABLED = 'disabled'

export type CourseStatus = typeof STATUS_COMPLETED | typeof STATUS_ACTIVE | typeof STATUS_DRAFT | typeof STATUS_TEST | typeof STATUS_DISABLED

export const NEGATIVE_STATUSES = [
    STATUS_TEST,
    STATUS_DISABLED
]

export const STATUS_PRIORITIES: CourseStatus[] = [
    STATUS_ACTIVE,
    STATUS_DRAFT,
    STATUS_TEST,
    STATUS_DISABLED,
]

// Attributes
export const ATTRIBUTE_STATUS = 'status'
export const ATTRIBUTE_THUMBNAIL = 'thumbnail'
export const ATTRIBUTE_CAPTION = 'caption'
export const ATTRIBUTE_VIDEO = 'video'
export const ATTRIBUTE_USECASE = 'usecase'
export const ATTRIBUTE_CATEGORIES = 'categories'
export const ATTRIBUTE_REDIRECT = 'redirect'
export const ATTRIBUTE_PREVIOUS = 'previous'
export const ATTRIBUTE_NEXT = 'next'

export interface Course {
    slug: string;
    title: string;
    link: string;
    video?: string;
    repository?: string;
    duration?: string;
    redirect?: string;
    thumbnail: string;
    caption: string;
    status: CourseStatus;
    interested?: string[];
    isInterested?: boolean;
    usecase: string | undefined;
    modules: Module[];
    categories: Category<any>[];
    prerequisites?: Course[];
    progressTo?: Course[];
    badge?: string;
    verify: string | undefined;
    cypher: string | undefined;
    summary: boolean;
    // Additional attributes extracted from Asciidoc
    [key: string]: any;
}

export interface CourseWithProgress extends Course {
    enrolmentId: string;
    enrolled: boolean;
    endrolledAt: Date;
    completed: boolean;
    completedAt: Date;
    lastSeenAt: Date;
    completedCount: number;
    completedPercentage: number | string;
    modules: ModuleWithProgress[];
    next?: Pagination;
    sandbox?: Sandbox;
}

export interface CourseStatusInformation {
    slug: CourseStatus;
    name: string;
    order: number;
    description: string | undefined;
}

export interface CourseStatusInformationWithCourses extends CourseStatusInformation {
    courses: Course[];
}

export type CoursesByStatus = {
    [key in CourseStatus]: CourseStatusInformationWithCourses;
}