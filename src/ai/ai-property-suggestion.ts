// src/ai/ai-property-suggestion.ts
'use server';

/**
 * @fileOverview Provides AI-powered suggestions for parameters to add to a property's profile to make it stand out.
 *
 * - suggestPropertyParameters - A function that takes property details as input and returns suggestions for additional parameters.
 * - SuggestPropertyParametersInput - The input type for the suggestPropertyParameters function.
 * - SuggestPropertyParametersOutput - The return type for the suggestPropertyParameters function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestPropertyParametersInputSchema = z.object({
  name: z.string().describe('The name of the property.'),
  address: z.string().describe('The address of the property.'),
  price: z.number().describe('The price of the property.'),
  year: z.number().describe('The year the property was built.'),
  description: z.string().describe('A description of the property.'),
});
export type SuggestPropertyParametersInput = z.infer<
  typeof SuggestPropertyParametersInputSchema
>;

const SuggestPropertyParametersOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe(
      'A list of suggestions for parameters to add to the property profile.'
    ),
});
export type SuggestPropertyParametersOutput = z.infer<
  typeof SuggestPropertyParametersOutputSchema
>;

export async function suggestPropertyParameters(
  input: SuggestPropertyParametersInput
): Promise<SuggestPropertyParametersOutput> {
  return suggestPropertyParametersFlow(input);
}

const suggestPropertyParametersPrompt = ai.definePrompt({
  name: 'suggestPropertyParametersPrompt',
  input: {schema: SuggestPropertyParametersInputSchema},
  output: {schema: SuggestPropertyParametersOutputSchema},
  prompt: `You are an expert real estate consultant. Given the following property details, suggest additional parameters that could be added to the property's profile to make it stand out and attract more potential renters. Provide a list of suggestions.

Property Name: {{{name}}}
Property Address: {{{address}}}
Property Price: {{{price}}}
Year Built: {{{year}}}
Description: {{{description}}}

Suggestions:`,
});

const suggestPropertyParametersFlow = ai.defineFlow(
  {
    name: 'suggestPropertyParametersFlow',
    inputSchema: SuggestPropertyParametersInputSchema,
    outputSchema: SuggestPropertyParametersOutputSchema,
  },
  async input => {
    const {output} = await suggestPropertyParametersPrompt(input);
    return output!;
  }
);
