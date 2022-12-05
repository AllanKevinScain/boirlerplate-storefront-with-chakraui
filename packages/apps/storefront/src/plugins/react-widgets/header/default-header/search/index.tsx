import React, { useRef } from 'react';
import { Form, Formik, FormikProps } from 'formik';
import { capitalize } from 'radash';
import { InputGroup, InputRightElement, Stack, Text } from '@chakra-ui/react';
import { AutoComplete, AutoCompleteInput, AutoCompleteItem, AutoCompleteList } from '@choc-ui/chakra-autocomplete';
import { SvgImage } from '@plugins/react-components';
import { SearchInterface } from '@plugins/types';
import { getEmptyMessage } from './helpers';

const inputStyles = {
  minH: '2.5rem',
  minW: '100%',
  rounded: '0.375rem',
  bg: 'white',
  pl: '1.25rem',
  pr: '0.75rem',
  _placeholder: {
    fontWeight: '400',
    fontSize: '0.875rem',
    lineHeight: '5.5',
    color: 'gray.400'
  }
};

export const SearchInput: React.FC<SearchInterface> = props => {
  const {
    searchInputPlaceholderText = 'O que você está procurando?',
    isSearchInputVisible = false,
    isSearchLoading = false,
    suggestions = [],
    searchTerms = '',
    setSearchTerms = () => null,
    onSearch = () => null
  } = props;

  const initialValues = {
    terms: ''
  };

  const formRef = useRef<FormikProps<typeof initialValues>>(null);

  const NoItemsFound = () => (
    <Text align="center" variant="sm">
      {getEmptyMessage({ searchTerms, isSearchLoading })}
    </Text>
  );

  const handleSubmit = () => {
    if (searchTerms.length > 2) {
      formRef?.current?.handleSubmit();
    }
  };

  if (!isSearchInputVisible) return null;

  return (
    <Formik
      innerRef={formRef}
      initialValues={initialValues}
      onSubmit={() => {
        onSearch(searchTerms);
      }}
    >
      <Form
        style={{ width: '100%' }}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            handleSubmit();
          }
        }}
      >
        <Stack direction="column" w="full" spacing="0" gap="0">
          <AutoComplete emptyState={<NoItemsFound />}>
            <InputGroup>
              <AutoCompleteInput
                variant="unstyled"
                placeholder={searchInputPlaceholderText}
                value={searchTerms}
                onChange={e => setSearchTerms(e.target.value)}
                type="text"
                {...inputStyles}
              />
              <InputRightElement cursor="pointer" h="10" w="10" p="0" onClick={handleSubmit}>
                <SvgImage sizex="5.5" sizey="5.5" src="icon_search.svg" color="blue.600" />
              </InputRightElement>
            </InputGroup>
            <AutoCompleteList>
              {/* Sugestões, baseados na pesquisa em si, no texto digitado */}
              {suggestions.map((item, index) => (
                <AutoCompleteItem
                  key={item.id || index}
                  value={item.keyword}
                  textTransform="capitalize"
                  onClick={() => onSearch(item.keyword)}
                >
                  <Text>{capitalize(item.keyword)}</Text>
                </AutoCompleteItem>
              ))}
            </AutoCompleteList>
          </AutoComplete>
        </Stack>
      </Form>
    </Formik>
  );
};
