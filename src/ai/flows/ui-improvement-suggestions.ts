'use server';

/**
 * @fileOverview This file defines a Genkit flow for providing UI improvement suggestions for a website.
 *
 * It analyzes the visual layout, accessibility, and information architecture of a website
 * and suggests improvements based on best practices.
 *
 * @file UIImprovementSuggestions
 * Defines the UIImprovementSuggestions flow, input, and output schemas.
 * Exports the uiImprovementSuggestions function to trigger the flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the input schema for the UI improvement suggestions flow.
const UIImprovementSuggestionsInputSchema = z.object({
  websiteContent: z
    .string()
    .describe('The complete HTML content of the website to be analyzed.'),
  colorPalette: z
    .string()
    .optional()
    .describe('The color palette used in the website, as a comma separated list of hex codes.'),
  typography: z
    .string()
    .optional()
    .describe('The fonts used in the website, as a comma separated list of font names.'),
});

export type UIImprovementSuggestionsInput = z.infer<
  typeof UIImprovementSuggestionsInputSchema
>;

// Define the output schema for the UI improvement suggestions flow.
const UIImprovementSuggestionsOutputSchema = z.object({
  accessibilitySuggestions: z
    .string()
    .describe(
      'Suggestions for improving the accessibility of the website, including contrast ratios and alt-text for images.'
    ),
  layoutSuggestions: z
    .string()
    .describe(
      'Suggestions for improving the visual layout of the website, including responsive design and grid system improvements.'
    ),
  informationArchitectureSuggestions: z
    .string()
    .describe(
      'Suggestions for improving the information architecture of the website, including navigation and content organization.'
    ),
  overallDesignSuggestions: z
    .string()
    .describe('Overall design improvements for colors, fonts, and animations.'),
});

export type UIImprovementSuggestionsOutput = z.infer<
  typeof UIImprovementSuggestionsOutputSchema
>;

// Define the prompt for the UI improvement suggestions flow.
const uiImprovementSuggestionsPrompt = ai.definePrompt({
  name: 'uiImprovementSuggestionsPrompt',
  input: {schema: UIImprovementSuggestionsInputSchema},
  output: {schema: UIImprovementSuggestionsOutputSchema},
  prompt: `You are an expert UI/UX designer and accessibility consultant.

You will analyze the provided website content and provide actionable suggestions for improving its visual layout, accessibility, and information architecture. Focus on providing clear and concise recommendations that can be easily implemented by a web developer.

Consider the following aspects when generating suggestions:

*   **Accessibility:** Check for sufficient contrast ratios, appropriate use of alt-text for images, and semantic HTML.
*   **Visual Layout:** Evaluate the responsive design, grid system, and overall visual hierarchy.
*   **Information Architecture:** Assess the navigation, content organization, and user flow.
*   **Color Palette:** Analyze the color palette and suggest improvements for better visual harmony and accessibility.  If colorPalette is not empty, the current color palette is: {{{colorPalette}}}
*   **Typography:** Review the fonts used and suggest improvements for readability and visual appeal.  If typography is not empty, the current typography is: {{{typography}}}

Website Content:
{{websiteContent}}

Output your suggestions in a structured format, clearly separating accessibility, layout, information architecture, and overall design improvements.
`,
});

// Define the Genkit flow for UI improvement suggestions.
const uiImprovementSuggestionsFlow = ai.defineFlow(
  {
    name: 'uiImprovementSuggestionsFlow',
    inputSchema: UIImprovementSuggestionsInputSchema,
    outputSchema: UIImprovementSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await uiImprovementSuggestionsPrompt(input);
    return output!;
  }
);

/**
 * Analyzes website content and provides UI improvement suggestions.
 * @param input The input data for the UI improvement suggestions flow.
 * @returns A promise that resolves to the UI improvement suggestions.
 */
export async function uiImprovementSuggestions(
  input: UIImprovementSuggestionsInput
): Promise<UIImprovementSuggestionsOutput> {
  return uiImprovementSuggestionsFlow(input);
}
